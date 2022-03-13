import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  dbUri: process.env.DB_URI,
  slack_bot_token: process.env.SLACK_BOT_TOKEN,
  slack_signing_secret: process.env.SLACK_SIGNING_SECRET,
};
