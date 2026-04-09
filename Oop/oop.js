/*const lion = {
    name:"Simba",
    species:"Lion",
    makeSound : function(){
        console.log(`${this.name} says: ROAR!!`)
    },
}; */



// The Class Tempate (Encapsulation)  ===> encapsulation == การเอาอะไรหลายๆอย่างเข้ามาในสิ่งๆหนึ่ง (เอาอะไรสักอย่างมาใส่ขวดแล้วก็ปิดฝา **class Animalคือขวด สิ่งของในขวดคือ {ของที่อยู่ในนี้})

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this._hunger = 50;

    }

    makeSound(sound) {
        console.log(`${this.name} says:${sound}`);
    }
    eat() {
        if (this._hunger > 0) {
            (this._hunger -= 10)
            console.log(`${this.name} the ${this.species} ate. Hunger is now decreasing by 10 : Hunger = ${this._hunger}`)
        } else {
            console.log(`${this.name} the ${this.species} is now full.`)
        }
    }
    rename(name) {
        this.name = name
    }
}

const cat = new Animal("MeawPoa", "Cat")

console.log(cat)

cat.makeSound("meaw")
cat.eat()



class Ling extends Animal {
    makeSound() {
        console.log(`${this.name} says:ugauga`);
    }
}

const baboon = new Ling("Bambina", "Lingangoo")
console.log(baboon)

baboon.makeSound()


class Mammal extends Animal {
    constructor(name, species, furColor) {
        super(name, species);
        this.furColor = furColor;
    }
    groom() {
        console.log(`${this.name} is brushing their ${this.furColor}`)
    }
}

class Bird extends Animal {
    constructor(name, species, wingspan) {
        super(name, species)
        this.wingspan = wingspan;
    }
    makeSound() {
        console.log(`${this.name} chirps : Tweet! Tweet!`)
    }

}

const Flaming = new Bird("Donqixote", "Flamingoes")

Flaming.makeSound()
console.log(Flaming.name)

Flaming.rename("Joe")

console.log(Flaming.name)

class superSentai {
    constructor(name,theme){
        this.name = name;
        this.theme = theme;

    }
    shout(){
        console.log(`We're ${this.theme} sentai ${this.name} Ranger`)
    }
}


const Gaoranger = new superSentai("Gao","Animal")

Gaoranger.shout()