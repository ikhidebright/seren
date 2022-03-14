import AlreadyExists from "../exceptions/already-exists.exception";
import { QuestionDocument } from "../model/questions.model";
import { createQuestions, getQuestionByType } from "../repo/questions.repo";
import { formatSlackBlock } from "./slack.service";

export async function addQuestionsService(body: QuestionDocument) {
  try {
    let typeExist = await getQuestionByType(body.type);
    if (typeExist) {
      throw new AlreadyExists("Sorry type of question already exist");
    }
    return await createQuestions(body);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getQuestionByTypeService(type: string) {
  try {
    let question = await getQuestionByType(type);
    const formattedSlack = formatSlackBlock(question);
    return formattedSlack;
  } catch (error) {
    throw new Error(error);
  }
}
