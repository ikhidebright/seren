import {
  addQuestions,
  getQuestionByTypeC,
  editQuestions,
} from "./controllers/questions.controller";

import {
  getAllUserResponses,
  addUserResponses,
} from "./controllers/userResponses.controller";
import {
  createQuestionData,
  editQuestionData,
} from "./schema/questions.schema";
import express, { NextFunction, Response, Request } from "express";

const router = express.Router();
router.get(
  "/auth/callback",
  (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send("You have successfully added the seren bot 🎉🎉🎉");
  }
);
router.post("/questions", createQuestionData, addQuestions);
router.patch("/questions/:id", editQuestionData, editQuestions);
router.post("/questions/:type", getQuestionByTypeC);
router.get("/responses", getAllUserResponses);
router.post("/responses", addUserResponses);

export default router;
