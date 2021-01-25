const { celebrate, Joi } = require("celebrate");

const addValidator = celebrate({
  headers: Joi.object({
    // "x-access-token": Joi.string().required()
  }).options({ allowUnknown: true }),
  body: Joi.object({
    city: Joi.string().required(),
    collegeName: Joi.string().required(),
    deletedAt: Joi.string().required(),
    stateId: Joi.string().required()
  }).options({ allowUnknown: true })
});

const getByIdValidator = celebrate({
  headers: Joi.object({
    // "x-access-token": Joi.string().required()
  }).options({ allowUnknown: true }),
  params: Joi.object({
    uuidIdentifier: Joi.string().required().guid({})
  }).options({ allowUnknown: false })
});

const getValidator = celebrate({
  headers: Joi.object({
    // "x-access-token": Joi.string().required()
  }).options({ allowUnknown: true }),
  query: Joi.object({
    city: Joi.string().required(),
    collegeName: Joi.string().required(),
    deletedAt: Joi.string().required(),
    stateId: Joi.string().required()
  }).options({ allowUnknown: true })
});

const updateValidator = celebrate({
  headers: Joi.object({
    // "x-access-token": Joi.string().required()
  }).options({ allowUnknown: true }),
  params: Joi.object({
    uuidIdentifier: Joi.string().required().guid({})
  }).options({ allowUnknown: false }),
  body: Joi.object({
    city: Joi.string().required(),
    collegeName: Joi.string().required(),
    deletedAt: Joi.string().required(),
    stateId: Joi.string().required()
  }).options({ allowUnknown: false })
});

const deleteValidator = celebrate({
  headers: Joi.object({
    // "x-access-token": Joi.string().required()
  }).options({ allowUnknown: true }),
  params: Joi.object({
    uuidIdentifier: Joi.string().required().guid({})
  }).options({ allowUnknown: false })
});

module.exports = {
  getValidator,
  getByIdValidator,
  addValidator,
  updateValidator,
  deleteValidator
};
