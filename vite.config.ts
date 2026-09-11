import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** Cible du proxy : le serveur Laravel, joignable depuis CETTE machine seulement. */
const API_TARGET = process.env.VITE_API_TARGET ?? 'http://127.0.0.1:8000'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    /**
     * Écoute sur toutes les interfaces : les autres postes du réseau local
     * ouvrent http://<ip-de-cette-machine>:5173.
     */
    host: true,

    /**
     * L'API est relayée par Vite au lieu d'être appelée directement.
     *
     * Le navigateur ne voit qu'une seule origine (celle de la vitrine), donc :
     *  - aucune requête cross-origin, donc aucun CORS à configurer ;
     *  - aucune adresse IP en dur dans le front — un poste distant appelle
     *    `/api/v1/...` sur l'origine qu'il a ouverte, pas `127.0.0.1` qui
     *    désignerait sa propre machine ;
     *  - le serveur Laravel n'a pas besoin d'être exposé au réseau : c'est Vite
     *    qui l'appelle, en local.
     */
    proxy: {
      '/api': { target: API_TARGET, changeOrigin: true },
      // Médias téléversés depuis le back-office (public/storage du back).
      '/storage': { target: API_TARGET, changeOrigin: true },
    },
  },
})
