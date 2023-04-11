function add(n1: number, n2: number, showResult: boolean) {
  if (showResult) {
    console.log(n1 + n2);

    return;
  }

  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;

add(number1, number2, printResult);

const person: {
  name: string;
  age: number;
} = {
  name: 'Maximilian',
  age: 30,
};

console.log(person.name);
