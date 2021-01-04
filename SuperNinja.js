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
    // ATTRIBUTES
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength =10;
        this.wisdom = 10
    }
    // METHODS
    speakWisdom() {
        super.drinkSake();
        console.log("It's on like Python!!!");
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();