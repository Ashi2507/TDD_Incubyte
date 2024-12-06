// function add(numbers) {
//   if (!numbers) return 0;

//   const nums = numbers.split(/,|\n/).map(Number); // Split by comma or newline
//   return nums.reduce((sum, num) => sum + num, 0);
// }

// module.exports = add;


function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/; // Default delimiters

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n", 2);
    delimiter = new RegExp(parts[0].slice(2)); // Custom delimiter
    numbers = parts[1];
  }

  const nums = numbers.split(/,|\n/).map(Number);
  return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
