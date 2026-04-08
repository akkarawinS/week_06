class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this.hunger = 50;
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
