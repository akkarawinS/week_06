class Zoo {
  constructor(zooName) {
    this.zooName = zooName;
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
    console.log(`Added ${animal.name} to the ${this.zooName}`);
  }

  showAllAnimals() {
    console.log(`\n--- Welcome to ${this.zooName} ---`);
    this.animals.forEach((animal) => {
      // Accessing properties and calling methods
      //   console.log(`Animal: ${animal.name} | Status: ${animal.getStatus()}`);
      console.log(`Animal: ${animal.name}`);
      animal.makeSound();
      animal.eat();
      console.log("-------------------");
    });
  }
}

module.exports = Zoo; // module = file ,part fully in itself ,node module to get all tool ,get obj but when have many class we use array {a,b,c}}