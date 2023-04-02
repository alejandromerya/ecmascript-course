const anotherFunction = (works) => {
  return new Promise((resolve, reject) => {
    if (works) {
      resolve('Hey!!');
    } else {
      reject('Whoops!');
    }
  });
};

anotherFunction(true)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
