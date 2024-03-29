const Joi = require("joi");

const getFormuleSchema = () => {
  return Joi.object({
    id: Joi.number().presence("optional"),
    type: Joi.string().max(255).presence("required"),
    description: Joi.string().max(255).presence("required"),
    coach_id: Joi.string().max(255).presence("required"),
    coach_name: Joi.string().max(255).presence("optional"),
  });
};

const validateFormule = (req, res, next) => {
  const schema = getFormuleSchema();

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

module.exports = validateFormule;
