import { QuestionDocument } from "@/model/questions.model";

export function formatSlackBlock(question: QuestionDocument) {
  const block = [
    {
      type: "section",
      block_id: question._id,
      text: {
        type: "mrkdwn",
        text: question.name,
      },
      accessory: {
        action_id: question.type,
        type: question.slackInteractionType, // "static_select",
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
