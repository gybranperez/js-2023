container = document.getElementById("codingChallenge002");

const getHigherBMI = (...people) => {
    return people.reduce((a, b) => (a.getBMI() > b.getBMI()) ? a : b)
};

const personWithHighestBMI = getHigherBMI(mark, john, gybran);

finalString = `
Based on the BMIs calculated in the Coding Challenge 01:

 - The higher BMI is from ${personWithHighestBMI.name},
 - Their BMI value is ${personWithHighestBMI.getBMI()} 
`;

console.log(finalString);
container.innerText = finalString;