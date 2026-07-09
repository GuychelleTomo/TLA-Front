import { createContext, useContext, type ReactNode } from 'react'
import { useAsync } from '@/hooks/useAsync'
import { getSiteConfig } from '@/services/content'
import type { SiteConfig } from '@/types/content'

interface SiteConfigContextValue {
  config: SiteConfig | null
  loading: boolean
}

const SiteConfigContext = createContext<SiteConfigContextValue>({ config: null, loading: true })

/** Charge une seule fois /site-config (coordonnées, réseaux, infos pré-inscription). */
export function SiteConfigProvider({ children }: { children: ReactNode }) {
  const { data, loading } = useAsync(() => getSiteConfig(), [])
  return (
    <SiteConfigContext.Provider value={{ config: data, loading }}>
      {children}
    </SiteConfigContext.Provider>
  )
}

export function useSiteConfig(): SiteConfigContextValue {
  return useContext(SiteConfigContext)
}
