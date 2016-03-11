'use strict';
module.exports = function (myVar) {
  const argLength = arguments.length;

  // validate arguments
  if (argLength !== 1) {
    throw new Error(`Expected 1 arguments, got ${argLength}`);
  }

  return ({}).toString.call(myVar).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};
