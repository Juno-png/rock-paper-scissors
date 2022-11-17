// get computer to randomly pick rock(1), paper(2), or scissors(3)

function getComputerChoice (min, max) {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getComputerChoice());