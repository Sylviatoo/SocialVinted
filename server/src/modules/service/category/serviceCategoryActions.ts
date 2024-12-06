import type { RequestHandler } from "express";
import serviceRepository from "./serviceCategoryRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all services
    const services = await serviceRepository.readAll();

    // Respond with the services in JSON format
    res.json(services);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific service based on the provided ID
    const serviceId = Number(req.params.id);
    const service = await serviceRepository.read(serviceId);

    // If the service is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the service in JSON format
    if (service == null) {
      res.sendStatus(404);
    } else {
      res.json(service);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation

export default { browse, read };
