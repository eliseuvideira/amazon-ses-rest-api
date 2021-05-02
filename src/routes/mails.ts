import { body } from "@ev-fns/validation";
import { Router } from "express";
import { mailsPost } from "../endpoints/mails";
import { auth } from "../middlewares/auth";
import { mailsPostBody } from "../validations/mails";

const router = Router();

/**
 * POST /mails
 * @tag mails
 * @security bearerAuth
 * @bodyContent {mailsPostRequestBody} application/json
 * @response 200
 * @responseContent {mailsPostResponseBody} 201.application/json
 * @response default
 * @responseContent {error} default.application/json
 */
router.post("/mails", auth, body(mailsPostBody), mailsPost);

export default router;
