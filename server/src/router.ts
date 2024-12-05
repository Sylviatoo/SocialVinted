import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import donationCategoryActions from "./modules/donation/category/donationCategoryActions";
import donationActions from "./modules/donation/donationActions";
import serviceCategoryActions from "./modules/service/category/serviceCategoryActions";
import serviceActions from "./modules/service/serviceActions";
import userActions from "./modules/user/userActions";

// Define user-related routes
router.get("/api/users", userActions.browse);
router.get("/api/users/:id", userActions.read);
router.post("/api/users", userActions.add);

// Define donation-related routes
router.get("/api/donations", donationActions.browse);
router.get("/api/donations/:id", donationActions.read);
router.post("/api/donations", donationActions.add);
router.delete("/api/donations/:id", donationActions.remove);

// Define donation-category-related routes
router.get("/api/donation_categories", donationCategoryActions.browse);
router.get("/api/donation_categories/:id", donationCategoryActions.read);

// Define service-related routes
router.get("/api/services", serviceActions.browse);
router.get("/api/services/:id", serviceActions.read);
router.post("/api/services", serviceActions.add);
router.delete("/api/services/:id", serviceActions.remove);

// Define service-category-related routes
router.get("/api/service_categories", serviceCategoryActions.browse);
router.get("/api/service_categories/:id", serviceCategoryActions.read);

/* ************************************************************************* */

export default router;
