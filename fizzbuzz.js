#!/usr/bin/env node

var config = {
  bounds: {
      low: 1,
      high: 100
  },
  conditions: [
    {
      cond: function (v) { return i%3==0 },
      label: 'Fizz'
    },
    {
      cond: function (v) { return i%5==0 },
      label: 'Buzz'
    },
    {
      cond: function (v) { return i%8==0 },
      label: 'Blip'
    },
    {
      cond: function (v) { return i%3==0 && i%5==0 },
      label: 'FizzBuzz'
    }
  ]
};

// Loop from low bound to high bound, and evaluate the int
for (var i = config.bounds.low; i <= config.bounds.high; i++) {
  var result = i;
  // Loop through the conditions, modify the 'result' if needed
  config.conditions.forEach( function(el, ind, array) {
    result = (el.cond(i)) ? el.label : result;
  })
  console.log( result );
}

