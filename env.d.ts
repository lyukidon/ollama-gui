interface ImportMetaEnv {
  readonly VITE_OLLAMA_URL: string;
  // 다른 VITE_ 환경 변수들을 여기에 추가하세요
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}