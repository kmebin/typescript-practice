type combinable = number | string;
type conversionDescriptor = 'as-number' | 'as-string';

function combine(input1: combinable, input2: combinable, resultConversion: conversionDescriptor) {
  let result;

  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAge = combine(30, 26, 'as-number');
const combinedName = combine('Max', 'Anna', 'as-string');
const combinedStringAge = combine('30', '26', 'as-number');

console.log(combinedAge, combinedName, combinedStringAge);

export {};
