const Joi = require("joi");

const getFormuleSchema = () => {
  return Joi.object({
    id: Joi.number().presence("optional"),
    type: Joi.string().max(255).presence("required"),
    category: Joi.string().max(255).presence("required"),
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
