#!/usr/bin/env node

var config = {
  bounds: {
      low: 1,
      high: 100
  },
  fizz: {
    cond: function (v) { return i%3==0 },
    label: 'Fizz'
  },
  buzz: {
    cond: function (v) { return i%5==0 },
    label: 'Buzz'
  },
  fizzbuzz: {
    cond: function (v) { return i%3==0 && i%5==0 },
    label: 'FizzBuzz'
  }
};

for (var i = config.bounds.low; i <= config.bounds.high; i++) {
  var result = i;
  console.log(
      "%s",
      config.fizzbuzz.cond(i) 
      ? config.fizzbuzz.label
      : config.fizz.cond(i)
        ? config.fizz.label
        : config.buzz.cond(i)
          ? config.buzz.label
          : i
  );
}
