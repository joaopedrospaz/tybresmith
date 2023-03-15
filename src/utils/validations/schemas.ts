import Joi from 'joi';

const required = '"{#key}" is required';

const shcemaProduct = Joi.object().keys({
  name: Joi.string().min(3).required(), 
  amount: Joi.string().min(3).required(),
}).messages({
  'any.required': required,
  'string.min': '"{#key}" length must be at least {{#limit}} characters long',
});

const shcemaLogin = Joi.object().keys({
  username: Joi.string().required(), 
  password: Joi.string().required(),
}).messages({
  'any.required': required,
});

const schemaUser = Joi.object().keys({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),  
}).messages({
  'any.required': required,
});

const schemas = {
  shcemaProduct,
  schemaUser,
  shcemaLogin,
};

export default schemas;