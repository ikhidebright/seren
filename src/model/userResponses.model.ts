import mongoose from "mongoose";

export interface UserResponses {
  username: string;
  question: string;
  answer: string[] | string;
}

const UserResponsesSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    question: { type: String, required: true },
    answer: { type: [String] || String, required: true },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", UserResponsesSchema);

export default UserModel;
