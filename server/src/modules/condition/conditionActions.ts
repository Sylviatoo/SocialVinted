import type { RequestHandler } from "express";
import conditionRepository from "./conditionRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all conditions
    const conditions = await conditionRepository.readAll();

    // Respond with the conditions in JSON format
    res.json(conditions);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific condition based on the provided ID
    const conditionId = Number(req.params.id);
    const condition = await conditionRepository.read(conditionId);

    // If the condition is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the condition in JSON format
    if (condition == null) {
      res.sendStatus(404);
    } else {
      res.json(condition);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation

export default { browse, read };
