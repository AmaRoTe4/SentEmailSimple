import Nodemailer from "nodemailer";
import {
  MAIL_HOST,
  MAIL_USER,
  MAIL_PASS,
  MAIL_PORT,
} from "../config/config.js";

export const conexionNodeMailer = () => {
  return Nodemailer.createTransport({
    host: MAIL_HOST,
    port: MAIL_PORT,
    secure: true,
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASS,
    },
  });
};
