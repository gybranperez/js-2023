/* 
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.info(ageJonas, ageSarah);
console.info(ageJonas * 2, ageJonas / 2);
*/
let container = document.getElementById("helloWorld");
let finalString = ""
const firstName = "Jonas";
const lastName = "Schmedtmann";


finalString += firstName + " " + lastName;
console.info(finalString);

let isFullAge = (age) => age >= 18;

const now = new Date(Date.now()).getFullYear();
const ageJonas = now - 1991;
const ageSarah = now - 2018;

finalString += "\nJonas " + (isFullAge(ageJonas) ? "is " : "isn't ") + "full age";
finalString += "\nSarah " + (isFullAge(ageSarah) ? "is " : "isn't ") + "full age";

console.info(isFullAge(ageJonas));
console.info(isFullAge(ageSarah));

container.innerText = finalString;

