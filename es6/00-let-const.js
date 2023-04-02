var name = 'John';
name = 'Alejandro';
console.log(name);

let fruit = 'apple';
fruit = 'kiwi';
console.log(fruit);

const fruits = () => {
  if (true) {
    var fruit1 = 'banana'; //function scope
    let fruit2 = 'apple'; //block scope
    const fruit3 = 'kiwi'; //block scope
  }

  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
};

fruits();
