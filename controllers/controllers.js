import vna from "../const/vna.js";
import { conexionNodeMailer } from "../mail/index.js";

export const sentToMailController = () => async (req, res, next) => {
  const emisor = req.body?.id_emisor;
  const receptores = req.body?.receptores;
  const mensaje = req.body?.mensaje;
  const subject = req.body?.subject;
  const bandeja = req.body?.bandeja;
  const type = req.body?.type ?? 1;

  if (type.toString() === vna.type_email.test) {
    return res.json({
      status: true,
      results: {},
      message: "Test successful!!!",
    });
  }

  if (
    emisor == null ||
    receptores == null ||
    mensaje == null ||
    subject == null ||
    type == null ||
    bandeja == null
  ) {
    return res.json({
      status: false,
      results: {},
      message: "Channel no found",
    });
  }

  const connection = conexionNodeMailer();

  try {
    await connection.verify();
  } catch (error) {
    console.log(error);
    res.json({ message: "Al conectarse con el server de correos" });
    return next(err);
  }

  try {
    for (let i = 0; receptores.length > i; i++) {
      const resultado = await connection.sendMail({
        from: `"${bandeja}" <${`${emisor}`}>`,
        to: receptores[i],
        subject,
        html: mensaje,
      });

      console.log(resultado);
    }

    connection.close();

    res.json({
      status: true,
      results: true,
      message: "Correos enviados con exito!!!",
    });
  } catch (err) {
    console.log(err);
    res.json({ message: "Error al enviar el mensaje" });
    return next(err);
  }
};
