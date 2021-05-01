import { SES } from "aws-sdk";

export const ses = new SES({
  apiVersion: "2010-12-01",
  credentials: {
    accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
  },
  region: process.env.AWS_SES_REGION,
});
