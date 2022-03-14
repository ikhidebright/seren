import { QuestionDocument } from "../model/questions.model";
import QuestionModel from "../model/questions.model";

export async function getQuestionByType(
  type: string
): Promise<QuestionDocument> {
  return await QuestionModel.findOne({
    type: type,
  });
}

export async function createQuestions(
  questionData: QuestionDocument
): Promise<any> {
  const question = await QuestionModel.create(questionData);
  return question;
}

export async function editQuestionsRepo(
  id: string,
  data: QuestionDocument
): Promise<void> {
  const filter = { _id: id };
  const doc = await QuestionModel.findOneAndUpdate(filter, data);
  return doc;
}
