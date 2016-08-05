module.exports = {
  bounds: {
      low: 1,
      high: 100
  },
  conditions: [
    {
      cond: function (v) { return v%3==0 },
      label: 'Fizz'
    },
    {
      cond: function (v) { return v%5==0 },
      label: 'Buzz'
    },
    {
      cond: function (v) { return v%8==0 },
      label: 'Blip'
    },
    {
      cond: function (v) { return v%3==0 && v%5==0 },
      label: 'FizzBuzz'
    }
  ]
};
