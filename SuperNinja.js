// PARENT CLASS
class Ninja {
    // ATTRIBUTES
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength =3;
    }
    // METHODS
    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log(
            "Name: " + this.name + "\n" +
            "Strength: " + this.strength + "\n" +
            "Speed: " + this.speed + "\n" +
            "Health: " + this.health
        );
    }
    drinkSake() {
        this.health += 10;
    }
}

// CHILD CLASS
class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.wisdom = 10
    }
}