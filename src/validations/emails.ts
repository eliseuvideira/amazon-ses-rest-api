import Joi from "joi";

export const emailsGetManyQuery = Joi.object()
  .keys({
    format: Joi.valid("text", "html"),
    from: Joi.string(),
    replyTo: Joi.string(),
    to: Joi.string(),
    subject: Joi.string(),
    sesMessageId: Joi.string(),
    $limit: Joi.number().integer().default(30).max(20).min(1),
    $skip: Joi.number().integer().default(0).min(0),
  })
  .required();

export const emailsPostBody = Joi.object()
  .keys({
    format: Joi.valid("text", "html").default("text"),
    from: Joi.string().required(),
    replyTo: Joi.array().items(Joi.string().required()),
    to: Joi.array().items(Joi.string().email().required()).required(),
    subject: Joi.string().required(),
    body: Joi.string().required(),
  })
  .required();

export const emailsGetOneParams = Joi.object()
  .keys({
    emailId: Joi.string()
      .regex(/^[0-9a-f]{24}$/i)
      .required(),
  })
  .required();
