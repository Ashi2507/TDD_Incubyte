const add = require('./stringCalculator');

test('should return 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('should return the number itself for a single number', () => {
  expect(add("1")).toBe(1);
});

test('should return the sum of two numbers', () => {
  expect(add("1,5")).toBe(6);
});
test('should return the sum of multiple numbers', () => {
  expect(add("1,2,3")).toBe(6);
  expect(add("4,5,6,7")).toBe(22);
});
test('should handle new lines as delimiters', () => {
  expect(add("1\n2,3")).toBe(6);
  expect(add("4\n5\n6")).toBe(15);
});
test('should handle custom delimiters', () => {
  expect(add("//;\n1;2")).toBe(3);
  expect(add("//#\n4#5#6")).toBe(15);
  expect(add("//***\n7***8***9")).toBe(24);
});
test('should throw an exception for negative numbers', () => {
  expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
  expect(() => add("//;\n1;-2;-3")).toThrow("negative numbers not allowed: -2,-3");
});
