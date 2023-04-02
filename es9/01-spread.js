const country = {
  co: 'Colombia',
  mx: 'Mexico'
};

const { co, mx } = country;

console.log(co, mx);

const user = {
  username: 'Alejandro',
  age: 25,
  country: 'Colombia'
};

const { username, ...values } = user;

console.log(username);
console.log(values);
