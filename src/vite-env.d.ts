/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL de base de l'API TLA-Back, ex. http://127.0.0.1:8000/api/v1 */
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
