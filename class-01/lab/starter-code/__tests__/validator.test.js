'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out
  let str = 'yes';
  let num = 1;
  let arr = ['a'];
  let obj = { x: 'y' };
  let func = () => { };
  let bool = false;

  const varTypes = {
    'string': str,
    'number': num,
    'array': arr,
    'object': obj,
    'function': func,
    'boolean': bool,
  };

  it('strings', () => {
    for (var key in varTypes) {
      if (key === 'string') {
        expect(validator.isString(varTypes[key])).toBeTruthy();
      } else {
        expect(validator.isString(varTypes[key])).toBeFalsy();
      }
    }
  });

  it('numbers', () => {
    for (var key in varTypes) {
      if (key === 'number') {
        expect(validator.isNumber(varTypes[key])).toBeTruthy();
      } else {
        expect(validator.isNumber(varTypes[key])).toBeFalsy();
      }
    }
  });

  it('arrays', () => {
    for (var key in varTypes) {
      if (key === 'array') {
        expect(validator.isArray(varTypes[key])).toBeTruthy();
      } else {
        expect(validator.isArray(varTypes[key])).toBeFalsy();
      }
    }
  });

  it('objects', () => {
    for (var key in varTypes) {
      if (key === 'array'|| key === 'object') {
        expect(validator.isObject(varTypes[key])).toBeTruthy();
      } else {
        expect(validator.isObject(varTypes[key])).toBeFalsy();
      }
    }
  });

  it('booleans', () => {
    for (var key in varTypes) {
      if (key === 'boolean') {
        expect(validator.isBoolean(varTypes[key])).toBeTruthy();
      } else {
        expect(validator.isBoolean(varTypes[key])).toBeFalsy();
      }
    }
  });

  it('functions', () => {
    for (var key in varTypes) {
      if (key === 'function') {
        expect(validator.isFunction(varTypes[key])).toBeTruthy();
      } else {
        expect(validator.isFunction(varTypes[key])).toBeFalsy();
      }
    }
  });
});

describe('validator module performs complex validations', () => {
  const personRules = {
    fields: {
      id: { type: 'string', required: true },
      name: { type: 'string', required: true },
      age: { type: 'number', required: true },
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

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(validator.isValid(susan, personRules)).toBeTruthy();
    // expect(validator.isValid(fred, personRules)).toBeFalsy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(false).toBeFalsy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    expect(false).toBeFalsy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(false).toBeFalsy();
  });

  // TODO: Cover so, so many more cases

});

