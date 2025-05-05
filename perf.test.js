const countWellFormedParenthesis = require('./main');

test('Performance for n=15', () => {
  const start = Date.now();
  const result = countWellFormedParenthesis(15);
  const duration = Date.now() - start;
  expect(result).toBe(9694845);
  expect(duration).toBeLessThan(100); // <100ms
});