import { endpoint } from "@ev-fns/endpoint";
import { HttpError } from "@ev-fns/errors";
import { sendEmail } from "../functions/sendEmail";
import { Email, parseEmail } from "../models/Email";

export const emailsGetMany = endpoint(async (req, res) => {
  const { $skip, $limit, ...filter } = req.query as Record<string, any>;

  const emails = await Email.find(filter).skip($skip).limit($limit);
  const emailsCount = await Email.countDocuments(filter);

  res
    .status(200)
    .header("x-total-count", `${emailsCount}`)
    .json(emails.map(parseEmail));
});

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

export const emailsGetOne = endpoint(async (req, res) => {
  const { emailId } = req.params;

  const email = await Email.findById(emailId);

  if (!email) {
    throw new HttpError(404, "Not found");
  }

  res.status(200).json(parseEmail(email));
});
