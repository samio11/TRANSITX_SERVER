import nodemailer from "nodemailer";
import config from "../config";
import { AppError } from "../errors/AppError";
import path from "path";
import ejs from "ejs";
const transporter = nodemailer.createTransport({
  host: config.SMTP_HOST,
  port: Number(config.SMTP_PORT),
  secure: true, // true for 465, false for other ports
  auth: {
    user: config.SMTP_USER,
    pass: config.SMTP_PASS,
  },
});

interface TEmailSend {
  to: string;
  subject: string;
  tempName: string;
  tempData?: Record<string, any>;
  attachments?: {
    fileName: string;
    content: Buffer | string;
    contentType: string;
  }[];
}

export const sendEmail = async ({
  to,
  subject,
  tempName,
  tempData,
  attachments,
}: TEmailSend) => {
  try {
    const tempPath = path.join(__dirname, `templates/${tempName}.ejs`);
    const html = await ejs.renderFile(tempPath, tempData);
    const info = await transporter.sendMail({
      to: to,
      subject: subject,
      html: html,
      attachments: attachments?.map((x) => ({
        filename: x.fileName,
        content: x.content,
        contentType: x.contentType,
      })),
    });
    console.log(`Email Send To:- ${info.messageId}`);
  } catch (err) {
    console.log(err);
    throw new AppError(401, `Email send Failed`);
  }
};
