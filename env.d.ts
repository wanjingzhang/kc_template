interface ImportMetaEnv {
  readonly VITE_APP_SERVER_URL: string;
  readonly DZ_API: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
