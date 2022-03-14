import { QuestionDocument } from "@/model/questions.model";

export function formatSlackBlock(question: QuestionDocument) {
  const block = {
    options: question.options.map((item) => {
      return {
        text: {
          type: "plain_text",
          text: item,
        },
        value: item,
      };
    }),
  };
  return block;
}
