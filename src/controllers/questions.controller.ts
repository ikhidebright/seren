import { NextFunction, Request, Response } from "express";
import { createQuestions, getQuestionByType } from "../repo/questions.repo";
import { QuestionDocument } from "../model/questions.model";
import AlreadyExists from "../exceptions/already-exists.exception";

export async function addQuestions(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const body = req.body as QuestionDocument;
    let typeExist = await getQuestionByType(body.type);
    if (typeExist)
      throw new AlreadyExists("Sorry type of question already exist");
    await createQuestions(body);
    return res.send("Questions Added Successfully");
  } catch (error) {
    next(error);
    console.log(error);
  }
}
