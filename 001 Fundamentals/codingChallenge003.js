container = document.getElementById("codingChallenge003");
finalString = ``;

const dolphins = { name: "dolphins", score: [96, 108, 89] };
const koalas = { name: "koalas", score: [96, 120, 89] };
const currentTeams = [dolphins, koalas];

const getAverageScore = (scoreList) => (scoreList.reduce((a, b) => a + b, 0) / scoreList.length).toFixed(3);
const getHighestScore = (teams) => {
    const array = teams
        .map((e) => { return { name: e.name, average: getAverageScore(e.score) } })
        .sort((a, b) => (a.average > b.average) ? a : b);
    return array.filter(team => team.average == array[0].average);
};

const highestScoreArray = getHighestScore(currentTeams);
if (highestScoreArray.length === 1) {
    finalString += `<br>Average scores: <br>`;
    currentTeams.forEach(e => { finalString += ` - ${e.name} : ${getAverageScore(e.score)} <br>`; });
    finalString += `<br>So the team with the highest score is the <strong>
                    ${highestScoreArray[0].name.toUpperCase()}</strong>!!!`;
} else {
    finalString += `<br>There are several teams with the same average score: <br>`;
    highestScoreArray.forEach(e => { finalString += ` - ${e.name} : ${e.average} <br>`; });
    finalString += `<br>So there's no winner yet.`;
}

console.log(finalString.replaceAll("<br>", "\n"));
container.innerHTML = finalString;