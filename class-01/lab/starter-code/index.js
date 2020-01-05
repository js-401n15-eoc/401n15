'use strict';

const validator = require('./lib/validator.js');

const personRules = {
  fields: {
    id: { type: 'string', required: true },
    name: { type: 'string', required: true },
    age: { type: 'number', required: true },
    hair: { type: 'object', required: false,
      color: { type: 'string', required: true },
      length: { type: 'string', required: true },

    },
    children: { type: 'array', valueType: 'string' },
  },
};

const susan = {
  id: '123-45-6789',
  name: 'Susan McDeveloperson',
  age: 37,
  children: [],
};

const fred = {
  id: 38,
  name: 'Freddy McCoder',
  children: [],
};

validator.isValid(susan, personRules);
validator.isValid(fred, personRules);
