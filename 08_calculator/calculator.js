const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	let sum = 0;

	for (number of numbers) {
		sum += number;
	}

	return sum;
};

const multiply = function(numbers) {
	let product = 1;

	for (number of numbers) {
		product *= number;
	}

	return product;
};

const power = function(num, power) {
	return num**power;
};

const factorial = function(num) {
	let result = num;

	if (num === 0) {
		return 1;
	}

	for (let i = num - 1; i > 0; i--) {
		result *= i;
	}

	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
