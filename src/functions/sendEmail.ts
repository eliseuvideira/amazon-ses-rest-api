import { SES } from "aws-sdk";
import { ses } from "./ses";

export const sendEmail = async (request: SES.SendEmailRequest) =>
  ses.sendEmail(request).promise();
