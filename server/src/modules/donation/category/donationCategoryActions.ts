import type { RequestHandler } from "express";
import donationRepository from "./donationCategoryRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all donations
    const donations = await donationRepository.readAll();

    // Respond with the donations in JSON format
    res.json(donations);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific donation based on the provided ID
    const donationId = Number(req.params.id);
    const donation = await donationRepository.read(donationId);

    // If the donation is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the donation in JSON format
    if (donation == null) {
      res.sendStatus(404);
    } else {
      res.json(donation);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation

export default { browse, read };
