module.exports = {
  bounds: {
      low: 1,
      high: 100
  },
  conditions: [
    function (v) { return (v%3==0) ? 'Fizz' : false },
    function (v) { return (v%5==0) ? 'Buzz' : false },
    function (v) { return (v%8==0) ? 'Blip' : false },
    function (v) { return (v%3==0 && v%5==0) ? 'FizzBuzz' : false }
  ]
};
