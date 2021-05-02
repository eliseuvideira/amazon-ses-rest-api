import { body, params, query } from "@ev-fns/validation";
import { Router } from "express";
import { emailsGetMany, emailsGetOne, emailsPost } from "../endpoints/emails";
import { auth } from "../middlewares/auth";
import {
  emailsGetManyQuery,
  emailsGetOneParams,
  emailsPostBody,
} from "../validations/emails";

const router = Router();

/**
 * GET /emails
 * @tag emails
 * @security bearerAuth
 * @queryParam {string} [format]
 * @queryParam {string} [from]
 * @queryParam {string} [to]
 * @queryParam {string} [subject]
 * @queryParam {string} [sesMessageId]
 * @queryParam {integer} [$limit]
 * @queryParam {integer} [$skip]
 * @response 200
 * @responseContent {Email[]} 200.application/json
 * @response default
 * @responseContent {error} default.application/json
 */
router.get("/emails", auth, query(emailsGetManyQuery), emailsGetMany);

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

/**
 * GET /emails/{emailId}
 * @tag emails
 * @security bearerAuth
 * @pathParam {string} emailId
 * @response 200
 * @responseContent {Email} 200.application/json
 * @response default
 * @responseContent {error} default.application/json
 */
router.get("/emails/:emailId", auth, params(emailsGetOneParams), emailsGetOne);

export default router;
