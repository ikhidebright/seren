import mongoose from "mongoose";

export interface UserResponses {
  type: string;
  name: string;
  options: string[];
}

export interface UserResponsesDocument
  extends UserResponses,
    mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const UserResponsesSchema = new mongoose.Schema(
  {
    type: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    options: { type: [String], required: true },
  },
  {
    timestamps: true,
  }
);

const UserResponsesModel = mongoose.model<UserResponsesDocument>(
  "UserResponses",
  UserResponsesSchema
);

export default UserResponsesModel;
