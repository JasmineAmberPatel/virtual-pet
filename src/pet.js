function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

const maximum_fitness = 10;
const lowest_hungerLevel = 0;

Pet.prototype = {
get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    },
growUp: function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
},
walk: function() {
    if ((this.fitness + 4) <= maximum_fitness) {
        this.fitness += 4;
    } else {
        this.fitness = maximum_fitness;
    }
},
feed: function() {
    if ((this.hunger - 3) <= lowest_hungerLevel) {
        this.hunger = lowest_hungerLevel;
    } else {
        this.hunger -= 3;
    }
},
checkUp: function() {
    if (this.fitness <= 3 && this.hunger >= 5) {
        return 'I am hungry AND i need a walk'
    } if (this.fitness <= 3) {
        return 'I need a walk'
    } if (this.hunger >= 5) {
        return 'I am hungry'
    } if (!this.fitness <= 3 && !this.hunger >= 5) {
      return 'I feel great!'
    }  
    },
};

module.exports = Pet;