import Joi from 'joi';

const required = '"{#key}" is required';

const shcemaProduct = Joi.object().keys({
  name: Joi.string().required(), 
  amount: Joi.string().required(),
}).messages({
  'any.required': required,
});

const shcemaLogin = Joi.object().keys({
  username: Joi.string().required(), 
  password: Joi.string().required(),
}).messages({
  'any.required': required,
});

const schemaUser = Joi.object().keys({
  username: Joi.string().required(),
  vocation: Joi.string().required(),
  level: Joi.number().required(),
  password: Joi.string().required(),  
}).messages({
  'any.required': required,
});

const schemas = {
  shcemaProduct,
  schemaUser,
  shcemaLogin,
};

export default schemas;