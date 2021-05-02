import { createModel, createSchema } from "@ev-fns/mongo";
import { Document } from "mongoose";

interface EmailProps {
  format: "text" | "html";
  from: string;
  to: string[];
  subject: string;
  body: string;
  sesMessageId: string;
  createdAt: Date;
  updatedAt: Date;
}

export const Email = createModel<EmailProps>(
  "Email",
  createSchema(
    {
      format: {
        type: String,
        enum: ["text", "html"],
        default: "text",
        required: true,
      },
      from: {
        type: String,
        required: true,
      },
      to: [
        {
          type: String,
          required: true,
        },
      ],
      subject: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: true,
      },
      sesMessageId: {
        type: String,
        required: true,
        unique: true,
      },
    },
    { timestamps: true },
  ),
  "emails",
);

export const parseEmail = ({
  _id,
  format,
  to,
  from,
  subject,
  body,
  sesMessageId,
  createdAt,
  updatedAt,
}: EmailProps & Document) => ({
  emailId: _id,
  format,
  to,
  from,
  subject,
  body,
  sesMessageId,
  createdAt,
  updatedAt,
});
