const Joi = require("joi");

const getCoachSchema = () => {
  return Joi.object({
    id: Joi.number().presence("optional"),
    name: Joi.string().max(255).presence("required"),
    speciality: Joi.string().max(255).presence("required"),
  });
};

const validateCoach = (req, res, next) => {
  const schema = getCoachSchema();

  const { error } = schema.validate(
    {
      ...req.body,
    },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = validateCoach;
