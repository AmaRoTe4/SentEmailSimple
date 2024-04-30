import dotenv from "dotenv";

dotenv.config();

export const HOST = "localhost";
export const PORT = 3501;
export const CLAVE_BACKEND = process.env.CLAVE_BACKEND;
export const MAIL_HOST = process.env.MAIL_HOST;
export const MAIL_USER = process.env.MAIL_USER;
export const MAIL_PASS = process.env.MAIL_PASS;
export const MAIL_PORT = process.env.MAIL_PORT;
