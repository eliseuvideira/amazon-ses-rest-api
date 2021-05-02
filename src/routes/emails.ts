import { body } from "@ev-fns/validation";
import { Router } from "express";
import { emailsPost } from "../endpoints/emails";
import { auth } from "../middlewares/auth";
import { emailsPostBody } from "../validations/emails";

const router = Router();

/**
 * POST /emails
 * @tag emails
 * @security bearerAuth
 * @bodyContent {emailsPostRequestBody} application/json
 * @response 200
 * @responseContent {emailsPostResponseBody} 201.application/json
 * @response default
 * @responseContent {error} default.application/json
 */
router.post("/emails", auth, body(emailsPostBody), emailsPost);

export default router;
