import { Express, Request, Response } from "express";
import {
  addQuestions,
  getQuestionByTypeC,
} from "./controllers/questions.controller";

import {
  getAllUserResponses,
  addUserResponses,
} from "./controllers/userResponses.controller";

function routes(app: Express) {
  app.post("/api/questions", addQuestions);
  app.post("/api/questions/:type", getQuestionByTypeC);
  app.get("/api/responses", getAllUserResponses);
  app.post("/api/responses", addUserResponses);
}

export default routes;
