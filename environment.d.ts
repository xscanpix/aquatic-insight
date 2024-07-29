declare global {
  namespace NodeJS {
    interface ProcessEnv {
      POSTGRES_DATABASE: string;
      POSTGRES_HOST: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_PRISMA_URL: string;
      POSTGRES_URL: string;
      POSTGRES_URL_NON_POOLING: string;
      POSTGRES_URL_NO_SSL: string;
      POSTGRES_USER: string;
      NEXT_PUBLIC_VERCEL_URL: string;
    }
  }
}

export {};
