const playerGuess = 6
const correctAnswer = 6

const message = playerGuess<correctAnswer?`too low`:playerGuess>correctAnswer? `too high`: `exactly right`
console.log(message)