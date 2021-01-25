const { celebrate, Joi, errors, Segments } = require('celebrate');
const subjectPostValidator=celebrate({
    body: Joi.object().keys({
      name: Joi.string().required()
    })
})
module.exports= {subjectPostValidator}