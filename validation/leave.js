const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.reason = !isEmpty(data.reason) ? data.reason : '';

  data.nameOfActor = !isEmpty(data.nameOfActor) ? data.nameOfActor : '';
  console.log(data);
  

  if (Validator.isEmpty(data.reason)) {
    errors.reason = 'Text field is required';
  }

  if (Validator.isEmpty(data.nameOfActor)) {
    errors.nameOfActor = 'nameOfActor field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};