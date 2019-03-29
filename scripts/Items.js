'use strict';
/*global cuid */
//eslint-disable-next-line no-unused-vars
const Item = (function() {


  return {
    validateName,
    create,
  };
}() );

function validateName (name){
  if (name.trim().length === 0) throw new TypeError('Name Doesn\'t exist');
}

function create(name){
  return {
    id: cuid(),
    name,
    checked: false
  };
}