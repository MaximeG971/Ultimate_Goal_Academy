// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all formules from the database
    const formules = await tables.formule.readAll();

    // Respond with the formules in JSON format
    res.status(200).json(formules);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific formule from the database based on the provided ID
    const formule = await tables.formule.read(req.params.id);

    // If the formule is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the formule in JSON format
    if (formule == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(formule);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
// const edit = async (req, res, next) => {
//   // Extract the formule data from the request body
//   const formule = req.body;

//   try {
//     // Insert the formule into the database
//     await tables.formule.update(formule, req.params.id);

//     // Respond with HTTP 204 (No Content)
//     res.sendStatus(204);
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// The A of BREAD - Add (Create) operation
// const add = async (req, res, next) => {
//   // Extract the formule data from the request body
//   const formule = req.body;

//   try {
//     // Insert the formule into the database
//     const insertId = await tables.formule.create(formule);

//     // Respond with HTTP 201 (Created) and the ID of the newly inserted formule
//     res.status(201).json({ ...req.body, id: insertId });
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  // Extract the formule data from the request body
  try {
    // Insert the formule into the database
    await tables.formule.delete(req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  // add,
  destroy,
};
