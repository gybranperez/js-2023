calculateBMI = (mass, height) => mass / (height ** 2);

class Person {
    constructor(name, mass, height, birthYear) {
        this.name = name;
        this.mass = mass;
        this.height = height;
        this.birthYear = birthYear;
    }
    getBMI = () => calculateBMI(this.mass, this.height).toFixed(1);
    getCurrentAge = () => now - this.birthYear;
}

let mark = new Person("Mark", 78, 1.69, 2003);
let john = new Person("John", 92, 1.95, 1980);
let gybran = new Person("Gybran", 82, 1.76, 1998);


container = document.getElementById("codingChallenge001");
finalString = "";

console.info(mark.name + "'s bmi is " + mark.getBMI());
console.info(john.name + "'s bmi is " + john.getBMI());
console.info(gybran.name + "'s bmi is " + gybran.getBMI());

finalString += "\n" + mark.name + "'s bmi is " + mark.getBMI();
finalString += "\n" + john.name + "'s bmi is " + john.getBMI();
finalString += "\n" + gybran.name + "'s bmi is " + gybran.getBMI();

container.innerText = finalString;