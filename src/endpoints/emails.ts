import { endpoint } from "@ev-fns/endpoint";
import { sendEmail } from "../functions/sendEmail";
import { Email, parseEmail } from "../models/Email";

export const emailsPost = endpoint(async (req, res) => {
  const { format, from, to, subject, body } = req.body as Record<string, any>;

  const response = await sendEmail({
    Source: from,
    Destination: {
      ToAddresses: to,
    },
    Message: {
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
      Body:
        format === "html"
          ? {
              Html: {
                Charset: "UTF-8",
                Data: body,
              },
            }
          : {
              Text: {
                Charset: "UTF-8",
                Data: body,
              },
            },
    },
  });

  const email = await Email.create({
    format,
    from,
    to,
    subject,
    body,
    sesMessageId: response.MessageId,
  });

  res.status(200).json(parseEmail(email));
});
