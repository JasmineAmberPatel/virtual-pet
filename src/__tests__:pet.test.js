const Pet = require('../src/pet.js');


describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    });
    it('has an initial age of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });
});

describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
    it('increases the hunger property by 5', () => {
        const pet = new Pet('Kelly');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    })
    it('decreases fitness by 3', () => {
        const pet = new Pet('Sandra');
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });
});

describe('walk', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet('fido');
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toEqual(8);
    });
    it('increases fitness by to a maximum of 10', () => {
        const pet = new Pet('fido');
        pet.fitness = 8;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });
});

describe('feed', () => {
    it('increases hunger level by 3', () => {
        const pet = new Pet('kevin');
        pet.hunger = 7;
        pet.feed()
        expect(pet.hunger).toEqual(4);
    })
    it('decreases hunger to lowest hunger level', () => {
        const pet = new Pet('Sansa');
        pet.hunger = 2;
        pet.feed()
        expect(pet.hunger).toEqual(0);
    })
})

describe('check up', () => {
    it('checks if the pet needs a walk', () => {
        const pet = new Pet('Alfred');
        pet.fitness = 1;
        expect(pet.checkUp()).toEqual('I need a walk');
    });
    it('checks if the pet is hungry', () => {
        const pet = new Pet('Sally');
        pet.hunger = 6;
        expect(pet.checkUp()).toEqual('I am hungry');
    });
    it('checks if the pet is hungry and needs a walk', () => {
        const pet = new Pet('Geoff');
        pet.hunger = 6
        pet.fitness = 1
        expect(pet.checkUp()).toEqual('I am hungry AND i need a walk');
    });
});