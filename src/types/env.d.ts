/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_API_BASEURL: string
    // 更多环境变量...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }


