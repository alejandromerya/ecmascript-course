const asyncFn = (value) => {
  return new Promise((resolve, reject) => {
    value
      ? setTimeout(() => resolve('Async!'), 2000)
      : reject(new Error('Error!'));
  });
};

const anotherFn = async () => {
  const response = await asyncFn(true);
  console.log(response);
};

console.log('Before');
anotherFn();
console.log('After');
