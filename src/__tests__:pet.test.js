const Pet = require('../src/pet.js');

describe('pet object', () => {
    let pet
    beforeEach(() => {
        pet = new Pet('Splishy Sploshy');
    });
    describe('constructor', () => {
        it('returns an object', () => {
            expect(new Pet('Fido')).toBeInstanceOf(Object);
        });
        it('sets the name property', () => {
            expect(pet.name).toEqual('Splishy Sploshy');
        });
        it('has an initial age of 0', () => {
            expect(pet.age).toEqual(0);
        });
    });
    describe('growUp', () => {
        it('increments the age by 1', () => {
            pet.growUp();
            expect(pet.age).toEqual(1);
        });
        it('increases the hunger property by 5', () => {
            pet.growUp();
            expect(pet.hunger).toEqual(5);
        })
        it('decreases fitness by 3', () => {
            pet.growUp();
            expect(pet.fitness).toEqual(7);
        });
    });
    describe('walk', () => {
        it('increases fitness by 4', () => {
            pet.fitness = 4;
            pet.walk();
            expect(pet.fitness).toEqual(8);
        });
        it('increases fitness by to a maximum of 10', () => {
            pet.fitness = 8;
            pet.walk();
            expect(pet.fitness).toEqual(10);
        });
    });
    describe('feed', () => {
        it('increases hunger level by 3', () => {
            pet.hunger = 7;
            pet.feed()
            expect(pet.hunger).toEqual(4);
        });
        it('decreases hunger to lowest hunger level', () => {
            pet.hunger = 2;
            pet.feed()
            expect(pet.hunger).toEqual(0);
        });
        it('throws an error if the pet is not alive', () => {
            pet.age = 30;
            expect(() => pet.feed()).toThrow('Your pet is no longer alive :(')
        });
    });
    describe('check up', () => {
        it('checks if the pet needs a walk', () => {
            pet.fitness = 1;
            expect(pet.checkUp()).toEqual('I need a walk');
        });
        it('checks if the pet is hungry', () => {
            pet.hunger = 6;
            expect(pet.checkUp()).toEqual('I am hungry');
        });
        it('checks if the pet is hungry and needs a walk', () => {
            pet.hunger = 6
            pet.fitness = 1
            expect(pet.checkUp()).toEqual('I am hungry AND i need a walk');
        });
    });
    describe('Death', () => {
        it('Checks if the pet is alive', () => {
            pet.hunger = 10
            expect(pet.isAlive).toEqual(false);
        });
        it('Checks if the pet is alive', () => {
            pet.fitness = 0
            expect(pet.isAlive).toEqual(false);
        });
        it('Checks if the pet is alive', () => {
            pet.age = 30
            expect(pet.isAlive).toEqual(false);
        });
        it('Checks if the pet is alive', () => {
            pet.hunger = 6
            expect(pet.isAlive).toEqual(true);
        });
    });
});

