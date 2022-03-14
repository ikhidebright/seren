import { Express, Request, Response } from "express";
import {
  addQuestions,
  getQuestionByTypeC,
} from "./controllers/questions.controller";

function routes(app: Express) {
  app.get("/check", (req: Request, res: Response) => res.sendStatus(200));

  app.post(
    "/api/questions",
    // validateResource(createUserSchema),
    addQuestions
  );

  app.get("/api/questions/:type", getQuestionByTypeC);
}

export default routes;
