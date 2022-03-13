import { QuestionDocument } from "../model/questions.model";
import QuestionModel from "../model/questions.model";

export async function getQuestionByType(
  type: string
): Promise<QuestionDocument> {
  return await QuestionModel.findOne({
    where: {
      type: type,
    },
  });
}

export async function createQuestions(
  questionData: QuestionDocument
): Promise<any> {
  const question = await QuestionModel.create(questionData);
  return question;
}
