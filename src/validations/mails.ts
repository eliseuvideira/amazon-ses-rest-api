import Joi from "joi";

export const mailsPostBody = Joi.object()
  .keys({
    type: Joi.valid("text", "html").default("text"),
    from: Joi.string().required(),
    to: Joi.array().items(Joi.string().email().required()).required(),
    subject: Joi.string().required(),
    body: Joi.string().required(),
  })
  .required();
