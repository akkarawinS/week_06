const myZoo = new Zoo("The JS Ternimal Zoo");

//Create instances
const leo = new Animal("Leo","Lion")
const zazu = new Bird("Zazu","Hornbill","2 feet")
const baloo = new Mammal("Baloo","Bear","brown")

//Add them to the zoo

myZoo.addAnimal(leo);
myZoo.addAnimal(zazu);
myZoo.addAnimal(baloo);

//Run the routine
myZoo.showAllAnimals();