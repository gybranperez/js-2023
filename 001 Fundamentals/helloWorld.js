/* 
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.info(ageJonas, ageSarah);
console.info(ageJonas * 2, ageJonas / 2);
*/

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.info(firstName + " " + lastName);

let isFullAge = (age) => age >= 18;

const now = new Date(Date.now()).getFullYear();
console.log(now)
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.info(isFullAge(ageJonas));
console.info(isFullAge(ageSarah));



