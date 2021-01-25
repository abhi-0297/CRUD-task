const { celebrate, Joi, errors, Segments } = require('celebrate');
const managementPostValidator=celebrate({
    body: Joi.object().keys({
      department_name: Joi.string().required(),
      role: Joi.string().required()
    })
})
module.exports= {managementPostValidator}