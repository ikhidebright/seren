import mongoose from "mongoose";

export interface QuestionDocument extends mongoose.Document {
  name: string;
  slackInteractionType: string;
  type: "hau" | "favs";
  options: string[];
}

const QuestionSchema = new mongoose.Schema(
  {
    type: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    slackInteractionType: { type: String, required: true },
    options: { type: [String], required: true },
  },
  {
    timestamps: true,
  }
);

const QuestionModel = mongoose.model("Question", QuestionSchema);

export default QuestionModel;
