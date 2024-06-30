/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VENDURE_PUBLIC_URL: string;
  readonly VITE_VENDURE_LOCAL_URL: string;
  readonly VITE_SHOW_PAYMENT_STEP: string;
  readonly VITE_SHOW_REVIEWS: string;
  readonly VITE_SECURE_COOKIE: string;
  readonly VITE_STRIPE_PUBLISHABLE_KEY: string;
  readonly VITE_APP_TITLE: string;
  readonly VITE_QWIK_INSIGHTS_KEY: string;
  readonly VITE_CHANNEL_TOKEN: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv
}
