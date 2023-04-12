type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor,
) {
	if (typeof input1 === 'number' 
    && typeof input2 === 'number'
    || resultConversion === 'as-number'
    ) {
		return +input1 + +input2;
	}

	if (typeof input1 === 'string' 
    && typeof input2 === 'string'
    || resultConversion === 'as-text'
    ) {
		return input1.toString() + +input2.toString();
	}
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges); // 56

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges); // '3026'

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames); // MaxAnna
