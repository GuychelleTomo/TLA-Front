/**
 * Client HTTP minimal pour l'API TLA-Back.
 *
 * Convention de transport : les contrôleurs Laravel renvoient des API Resources,
 * donc les réponses sont enveloppées dans `{ "data": ... }`. Les helpers ci-dessous
 * déballent automatiquement cette enveloppe et renvoient directement le payload.
 */

const BASE_URL = (import.meta.env.VITE_API_URL ?? '/api/v1').replace(/\/$/, '')

export class ApiError extends Error {
  readonly status: number
  readonly payload?: unknown

  constructor(message: string, status: number, payload?: unknown) {
    super(message)
    this.status = status
    this.payload = payload
    this.name = 'ApiError'
  }
}

type Envelope<T> = { data: T } | T

function unwrap<T>(body: Envelope<T>): T {
  if (body && typeof body === 'object' && 'data' in (body as Record<string, unknown>)) {
    return (body as { data: T }).data
  }
  return body as T
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const url = `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`

  let res: Response
  try {
    res = await fetch(url, {
      headers: {
        Accept: 'application/json',
        ...(init?.body ? { 'Content-Type': 'application/json' } : {}),
        ...init?.headers,
      },
      ...init,
    })
  } catch (err) {
    throw new ApiError('Impossible de joindre le serveur.', 0, err)
  }

  const isJson = res.headers.get('content-type')?.includes('application/json')
  const body = isJson ? await res.json().catch(() => null) : await res.text()

  if (!res.ok) {
    const message =
      (isJson && body && typeof body === 'object' && 'message' in body
        ? (body as { message?: string }).message
        : undefined) ?? `Erreur ${res.status}`
    throw new ApiError(message, res.status, body)
  }

  return unwrap<T>(body as Envelope<T>)
}

/**
 * Cache mémoire + déduplication des GET : une même ressource appelée par
 * plusieurs sections (ex. /news, /about, /site-config) ne déclenche qu'une
 * seule requête réseau, et les revisites sont instantanées (moins de « saut »
 * de mise en page pendant le chargement).
 */
const getCache = new Map<string, Promise<unknown>>()

export function apiGet<T>(path: string, init?: RequestInit): Promise<T> {
  // Les appels avec options personnalisées ne sont pas mis en cache.
  if (init) return request<T>(path, { method: 'GET', ...init })

  if (!getCache.has(path)) {
    const pending = request<T>(path, { method: 'GET' }).catch((err) => {
      getCache.delete(path) // ne pas mémoriser un échec
      throw err
    })
    getCache.set(path, pending)
  }

  return getCache.get(path) as Promise<T>
}

/** Vide le cache des GET (ex. après une mutation qui modifie le contenu). */
export function clearApiCache(path?: string): void {
  if (path) getCache.delete(path)
  else getCache.clear()
}

export function apiPost<T>(path: string, data?: unknown, init?: RequestInit): Promise<T> {
  return request<T>(path, {
    method: 'POST',
    body: data != null ? JSON.stringify(data) : undefined,
    ...init,
  })
}
