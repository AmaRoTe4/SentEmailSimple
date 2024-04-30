import express from "express";
import cors from "cors";
import { HOST, PORT } from "./config/config.js";
import { router } from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Servidor to http://${HOST}:${PORT}`);
});
