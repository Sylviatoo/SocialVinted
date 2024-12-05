import type { RequestHandler } from "express";
import donationRepository from "./donationRepository";

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
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the donation data from the request body
    const newDonation = {
      date: req.body.date,
      picture: req.body.picture,
      title: req.body.title,
      description: req.body.description,
      condition_id: req.body.condition_id,
      category_id: req.body.category_id,
      user_id: req.body.user_id,
    };

    // Create the donation
    const insertId = await donationRepository.create(newDonation);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted donation
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Add (Delete) operation
const remove: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific donation based on the provided ID
    const donationId = Number(req.params.id);
    const donation = await donationRepository.read(donationId);

    // If the donation is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the donation in JSON format
    if (donation == null) {
      res.sendStatus(404);
    } else {
      await donationRepository.delete(donationId);
      res.sendStatus(204);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add, remove };
