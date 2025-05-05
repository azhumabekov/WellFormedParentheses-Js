const countWellFormedParenthesis = require('./main');

test('Catalan numbers for n = 0 to 5', () => {
  expect(countWellFormedParenthesis(0)).toBe(1);
  expect(countWellFormedParenthesis(1)).toBe(1);
  expect(countWellFormedParenthesis(2)).toBe(2);
  expect(countWellFormedParenthesis(3)).toBe(5);
  expect(countWellFormedParenthesis(4)).toBe(14);
  expect(countWellFormedParenthesis(5)).toBe(42);
});

test('Maximum valid value', () => {
  expect(countWellFormedParenthesis(15)).toBe(9694845);
});

test('Throws error for invalid n', () => {
  expect(() => countWellFormedParenthesis(-1)).toThrow();
  expect(() => countWellFormedParenthesis(16)).toThrow();
});