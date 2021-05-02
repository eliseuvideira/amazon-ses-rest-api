declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: "development" | "test" | "production";
    PORT: string;
    API_NAME: string;
    API_TOKEN: string;
    AWS_SES_DOMAIN: string;
    AWS_SES_ACCESS_KEY_ID: string;
    AWS_SES_SECRET_ACCESS_KEY: string;
    AWS_SES_REGION: string;
    MONGODB_PROTOCOL: "mongodb" | "mongodb+srv";
    MONGODB_SERVER: string;
    MONGODB_PORT: string;
    MONGODB_USER: string;
    MONGODB_PASSWORD: string;
    MONGODB_DATABASE: string;
  }
}
