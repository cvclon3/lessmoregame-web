console.info("Check my GitHub: https://github.com/cvclon3");

function getRandomNumber () {
    return Math.round(Math.random() * (1000 - 1) + 1);
}

function definition (input, randomNumber) {
    if (input == randomNumber) {
        document.getElementById('result').innerHTML = "You win";
        document.getElementById('end').hidden = false;
    } else if (input < randomNumber) {
        document.getElementById('result').innerHTML = "more";
    } else {
        document.getElementById('result').innerHTML = "less";
    }
}

const randomNumber = getRandomNumber();
/*console.log(randomNumber);*/

document.getElementById('end').hidden = true;

function runScript(e) {
    if (e.keyCode === 13) {
        let input = document.getElementById("scriptBox").value;
        definition(input, randomNumber);
        return false;
    }
}