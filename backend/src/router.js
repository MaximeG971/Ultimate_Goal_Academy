const express = require("express");

const router = express.Router();

/* **************************** FORMULE *********************************** */

const formuleControllers = require("./controllers/formuleControllers");
// const validateFormule = require("./validators/validateFormule");

router.get("/formules", formuleControllers.browse);
router.get("/formules/:id", formuleControllers.read);
// router.post("/formules", validateFormule, formuleControllers.add);
// router.put("/formules/:id", validateFormule, formuleControllers.edit);
// router.delete("/formules/:id", formuleControllers.destroy);

/* **************************** COACH *********************************** */

const coachControllers = require("./controllers/coachControllers");
// const validateCoach = require("./validators/validateCoach");

router.get("/coachs", coachControllers.browse);
router.get("/coachs/:id", coachControllers.read);
// router.post("/coachs", validateCoach, coachControllers.add);
// router.put("/coachs/:id", validateCoach, coachControllers.edit);
// router.delete("/coachs/:id", coachControllers.destroy);

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

/* ************************************************************************* */

module.exports = router;
