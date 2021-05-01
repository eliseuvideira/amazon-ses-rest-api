import { endpoint } from "@ev-fns/endpoint";
import { sendEmail } from "../functions/sendEmail";

export const mailsPost = endpoint(async (req, res) => {
  const { type, from, to, subject, body } = req.body as Record<string, any>;

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
        type === "html"
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

  res.status(200).json({ MessageId: response.MessageId });
});
