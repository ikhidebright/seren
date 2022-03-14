import { NextFunction, Request, Response } from "express";
import {
  addResponseRepo,
  getAllResponsesRepo,
} from "../repo/userResponse.repo";
import { UserResponses } from "../model/userResponses.model";

export async function getAllUserResponses(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const responses = await getAllResponsesRepo();
    return res.status(200).send(responses);
  } catch (error) {
    next(error);
  }
}

export async function addUserResponses(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = req.body as UserResponses;
    const responses = await addResponseRepo(data);
    return res.status(200).send(responses);
  } catch (error) {
    next(error);
  }
}
