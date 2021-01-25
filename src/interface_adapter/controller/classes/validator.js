const { celebrate, Joi, errors, Segments } = require('celebrate');
const classesPostValidator=celebrate({
    body: Joi.object().keys({
      class_Name: Joi.string().required(),
      total_student: Joi.integer().required(),
      class_no: Joi.integer().required(),
      floor_no: Joi.string().required()
    })
})
module.exports= {classesPostValidator}