const Queue = require('./queue');

class AnimalShelter {
    constructor() { this.newDog = new Queue(); this.newCat = new Queue(); }
    enqueue(animal) {
        if (animal.type === 'Cat') {
            this.newCat.enqueue(animal);
        } else if (animal.type === 'Dog') {
            this.newDog.enqueue(animal);
        } else { 
            return null ;
        }
    }
    dequeue(pref) {
        if (pref === 'Dog') {
            return this.newDog.dequeue(pref);
        }
        else if (pref === 'Cat') {
            return this.newCat.dequeue(pref);
        }
        else { return null; }
    }
}

module.exports = AnimalShelter;
