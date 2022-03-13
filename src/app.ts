import express from "express";
import config from "config";
import connect from "../config/database";
import logger from "../config/logger";
import routes from "./routes";
import slackApp from "./services/slack.services";
import { errorHandler } from "./middlewares/error.middleware";

// import deserializedUser from "./middleware/deserializeUser";

const port = config.get<number>("port");

const app = express();

app.use(express.json());

app.use(errorHandler);

// app.use(deserializedUser);

app.listen(port, async () => {
  logger.info(`App is running at http://localhost:${port}`);
  await connect();
  routes(app);
  // await slackApp();
});
