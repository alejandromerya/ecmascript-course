class User {
  //Constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //Methods
  greetings() {
    console.log(`Welcome comrades my name is ${this.name}`);
  }

  #getAge() {
    return this.age;
  }
}

const gabriel = new User('Gabriel', 25);

gabriel.greetings();

console.log(gabriel.getAge());
