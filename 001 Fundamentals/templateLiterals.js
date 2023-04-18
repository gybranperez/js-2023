const gybranNew = `I'm ${gybran.name}, a ${gybran.getCurrentAge()} years old dev`;

container = document.getElementById("templateLiterals");
finalString = "\n" + gybranNew;
finalString += `\n Just a regular string`;
finalString += `

String
with 
multiple
lines`;

console.log(finalString);
container.innerText = finalString;

