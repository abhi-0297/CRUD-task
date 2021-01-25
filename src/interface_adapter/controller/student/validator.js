const { celebrate, Joi, errors, Segments } = require('celebrate');
const studentPostValidator=celebrate({
    body: Joi.object().keys({
      FullName: Joi.string().required(),
      lastName: Joi.string().required(),
      age: Joi.integer().required(),
      phone_no: Joi.integer().required(),
      gender: Joi.string().required()
    })
})
module.exports= {studentPostValidator}