import { Express, Request, Response } from "express";
import { addQuestions } from "./controllers/questions.controller";

function routes(app: Express) {
  app.get("/check", (req: Request, res: Response) => res.sendStatus(200));

  app.post(
    "/api/questions",
    // validateResource(createUserSchema),
    addQuestions
  );
}

export default routes;
