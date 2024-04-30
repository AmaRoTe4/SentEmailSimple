import express from "express";
import vna from "../const/vna.js";
import { sentToMailController } from "../controllers/controllers.js";
import { validarClave } from "../validations/index.js";

export const router = express.Router();

router.get("/*", validarClave);
router.post("/*", validarClave);

router.post(`/${vna.urls.sentToMail}/`, (req, res, next) => {
  const aux = sentToMailController();
  aux(req, res, next);
});
