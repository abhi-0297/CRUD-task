const { celebrate, Joi, errors, Segments } = require('celebrate');
const teacherPostValidator=celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      age: Joi.integer().required(),
      gender: Joi.string().required(),
      salary: Joi.integer().required(),
      experience: Joi.integer().required()
    })
})
module.exports= {teacherPostValidator}