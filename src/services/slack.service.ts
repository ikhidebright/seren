import { QuestionDocument } from "@/model/questions.model";

export function formatSlackBlock(question: QuestionDocument) {
  const block = [
    {
      type: "section",
      block_id: "section678",
      text: {
        type: "mrkdwn",
        text: question.name,
      },
      accessory: {
        action_id: "text1234",
        type: "static_select",
        placeholder: {
          type: "plain_text",
          text: "Choose answer",
        },
        options: question.options.map((item) => {
          return {
            text: {
              type: "plain_text",
              text: item,
            },
            value: item,
          };
        }),
      },
    },
  ];
  return block;
}
