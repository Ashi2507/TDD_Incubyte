function add(numbers) {
  if (!numbers) return 0;

  const nums = numbers.split(/,|\n/).map(Number); // Split by comma or newline
  return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
