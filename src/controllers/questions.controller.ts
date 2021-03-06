import { editQuestionsRepo } from "../repo/questions.repo";
import { NextFunction, Request, Response } from "express";
import { QuestionDocument } from "../model/questions.model";
import {
  addQuestionsService,
  getQuestionByTypeService,
} from "../services/question.service";

export async function addQuestions(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const body = req.body as QuestionDocument;
    await addQuestionsService(body);
    return res.send("Questions Added Successfully");
  } catch (error) {
    next(error);
  }
}

export async function editQuestions(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const body = req.body as QuestionDocument;
    const { id } = req.params;
    await editQuestionsRepo(id, body);
    return res.send("Questions Edited Successfully");
  } catch (error) {
    next(error);
  }
}

export async function getQuestionByTypeC(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { type } = req.params;
    let question = await getQuestionByTypeService(type);
    return res.status(200).send(question);
  } catch (error) {
    next(error);
  }
}
