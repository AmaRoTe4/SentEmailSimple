import { CLAVE_BACKEND } from "../config/config.js";

export const validarClave = (req, res, next) => {
  const clave = req.header("clave");

  console.log(clave);

  if (clave && clave === CLAVE_BACKEND) {
    next();
  } else {
    res.status(401).send("Clave no válida");
  }
};
