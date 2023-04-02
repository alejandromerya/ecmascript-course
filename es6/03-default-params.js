function newUser(name, age, country) {
  const finalName = name || 'Gabriel';
  const finalAge = age || 21;
  const finalCountry = country || 'Colombia';
  console.log(finalName, finalAge, finalCountry);
}

newUser();
newUser('Alejandro', 25, 'Mexico');

function newAdmin(name = 'Gabriel', age = 25, country = 'Colombia') {
  console.log(name, age, country);
}

newAdmin();
newAdmin('Alejandro', 25, 'Mexico');
