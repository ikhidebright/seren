import Joi from "joi";
import { AppValidator } from "./validator";

const createQuestion = {
  type: Joi.string().valid("hau", "favs").required(),
  name: Joi.string().required(),
  slackInteractionType: Joi.string()
    .valid("multi_static_select", "static_select")
    .required(),
  options: Joi.array().required(),
};

const editQuestion = {
  name: Joi.string().optional(),
  slackInteractionType: Joi.string()
    .valid("multi_static_select", "static_select")
    .optional(),
  options: Joi.array().optional(),
};

// questions

export const createQuestionData = AppValidator.body(Joi.object(createQuestion));
export const editQuestionData = AppValidator.body(Joi.object(editQuestion));
