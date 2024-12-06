function add(numbers) {
  if (!numbers) return 0; // Empty string

  const nums = numbers.split(',').map(Number); // Split and convert to numbers
  return nums.reduce((sum, num) => sum + num, 0); // Sum all numbers
}

module.exports = add;

