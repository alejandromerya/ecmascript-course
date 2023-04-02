//arrays destructuring
const fruits = ['banana', 'kiwi'];
const [a, b] = fruits;
console.log(a, b);

//object destructuring
const user = {
  name: 'Gabriel',
  age: 25,
};
const { name, age } = user;
console.log(name, age);

//spread operator
const person = {
  name: 'Gabriel',
  age: 25,
};

const country = 'Colombia';

const data = { ...person, country };

console.log(data);

//rest
function sum(num, ...values) {
  console.log(num);
  console.log(values[0]);
  return num * values[0];
}

sum(1, 1, 2, 3);
