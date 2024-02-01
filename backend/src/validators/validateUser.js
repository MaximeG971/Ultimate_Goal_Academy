const Joi = require("joi");

const getUserSchema = () => {
  return Joi.object({
    id: Joi.number().presence("optional"),
    email: Joi.string().max(255).presence("required"),
    password: Joi.string().max(255).presence("required"),
  });
};

const validateUser = (req, res, next) => {
  const schema = getUserSchema();

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

module.exports = validateUser;
