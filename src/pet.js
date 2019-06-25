function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.children = [];
}

const maximum_fitnessLevel = 10;
const lowest_fitnessLevel = 0;
const maximum_hungerLevel = 10;
const lowest_hungerLevel = 0;
const maximum_age = 30;

Pet.prototype = {
get isAlive() {
    return this.age < maximum_age && this.hunger < maximum_hungerLevel && this.fitness > lowest_fitnessLevel;
    },
growUp: function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
},
walk: function() {
    if ((this.fitness + 4) <= maximum_fitnessLevel) {
        this.fitness += 4;
    } else {
        this.fitness = maximum_fitnessLevel;
    }
},
feed: function() {
    if(!this.isAlive){
        throw new Error('Your pet is no longer alive :(')
    }
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
adoptChild: function(child) {
    this.children.push(child);
},
};

module.exports = Pet;