#!/usr/bin/env node

var config = require('./config.js');

// Loop from low bound to high bound, and evaluate the int
for (var i = config.bounds.low; i <= config.bounds.high; i++) {
  var result = i;
  // Loop through the conditions, modify the 'result' if needed
  config.conditions.forEach( function(el, ind, array) {
    result = (el.cond(i)) ? el.label : result;
  })
  console.log( result );
}

