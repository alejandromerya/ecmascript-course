function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const iterator = iterate(['Gabriel', 'Alejandro', 'Platon']);

console.log(iterator.next().value);
console.log(iterator.next().value);
