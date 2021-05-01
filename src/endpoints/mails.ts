import { endpoint } from "@ev-fns/endpoint";

export const mailsPost = endpoint(async (req, res) => {
  res.status(204).end();
});
