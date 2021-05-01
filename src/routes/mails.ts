import { Router } from "express";
import { mailsPost } from "../endpoints/mails";
import { auth } from "../middlewares/auth";

const router = Router();

/**
 * POST /mails
 * @tag mails
 * @security BearerAuth
 * @response 204
 * @response default
 * @responseContent {Error} default.application/json
 */
router.post("/mails", auth, mailsPost);

export default router;
