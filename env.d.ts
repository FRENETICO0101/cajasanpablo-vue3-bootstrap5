/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ASSET_PREFIX: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Google Analytics gtag declarations
declare global {
  function gtag(
    command: 'config' | 'event' | 'custom_map' | 'set',
    target?: string,
    config?: {
      [key: string]: string | number | boolean
      event_category?: string
      event_label?: string
      value?: number
    }
  ): void
}

export {}
