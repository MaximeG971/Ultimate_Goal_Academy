// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all coachs from the database
    const coachs = await tables.coach.readAll();

    // Respond with the coachs in JSON format
    res.status(200).json(coachs);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific coach from the database based on the provided ID
    const coach = await tables.coach.read(req.params.id);

    // If the coach is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the coach in JSON format
    if (coach == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(coach);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  // Extract the coach data from the request body
  const coach = req.body;

  try {
    // Insert the coach into the database
    await tables.coach.update(coach, req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the coach data from the request body
  const coach = req.body;

  try {
    // Insert the coach into the database
    const insertId = await tables.coach.create(coach);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted coach
    res.status(201).json({ ...req.body, id: insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  // Extract the coach data from the request body
  try {
    // Insert the coach into the database
    await tables.coach.delete(req.params.id);

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
  edit,
  add,
  destroy,
};
