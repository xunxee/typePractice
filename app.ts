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
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for (const hobby of person.hobbies) {
  console.log(hobby);
}
