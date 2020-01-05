'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isValid = (input, rules) => {
  var fieldKeys = Object.keys(rules.fields);
  var fieldVals = Object.values(rules.fields);
  for (var field in fields) {
    for (var prop in field) {
      if (prop.required && typeof input.field !== field.type) {
        return false;
      }
    }
  }
  return true;
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};

validator.isNumber = (input) => {
  return typeof input === 'number';
};

validator.isArray = (input) => {
  return Array.isArray(input);
};

validator.isObject = (input) => {
  return typeof input === 'object';
};

validator.isFunction = (input) => {
  return typeof input === 'function';
};

validator.isBoolean = (input) => {
  return typeof input === 'boolean';
};