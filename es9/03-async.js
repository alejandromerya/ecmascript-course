async function* anotherGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const generator = anotherGenerator();

generator.next().then((data) => console.log(data.value));
generator.next().then((data) => console.log(data.value));
generator.next().then((data) => console.log(data.value));
console.log('Hello!');
