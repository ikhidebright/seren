import UserModel, { UserResponses } from "../model/userResponses.model";

export async function getAllResponsesRepo(): Promise<UserResponses[]> {
  return await UserModel.find({});
}

export async function addResponseRepo(
  responseData: UserResponses
): Promise<any> {
  const response = await UserModel.create(responseData);
  return response;
}
