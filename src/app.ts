import express from "express";
import config from "config";
import connect from "../config/database";
import logger from "../config/logger";
import { errorHandler } from "./middlewares/error.middleware";
import router from "./routes";

const port = config.get<number>("port");

const app = express();

app.use(express.json());

app.use("/api", router);

app.use(errorHandler);

app.listen(port, async () => {
  logger.info(`App is running on ${port}`);
  await connect();
});
