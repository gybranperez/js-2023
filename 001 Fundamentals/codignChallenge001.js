calculateBMI = (mass, height) => mass / (height ** 2);

class Person {
    constructor(name, mass, height) {
        this.name = name;
        this.mass = mass;
        this.height = height;
    }
    getBMI = () => calculateBMI(this.mass, this.height);
}
let mark = new Person("Mark", 78, 1.69);
let john = new Person("John", 92, 1.95);
let gybran = new Person("Gybran", 78, 1.76);

console.info(mark.name + "'s bmi is " + mark.getBMI());
console.info(john.name + "'s bmi is " + john.getBMI());
console.info(gybran.name + "'s bmi is " + gybran.getBMI());