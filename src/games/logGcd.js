import startGame from '../index.js';

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculateGCD(a, b) {
  if (b === 0) {
    return a;
  } else {
    return calculateGCD(b, a % b);
  }
}

const rules = 'Find the greatest common divisor of given numbers.';

function getQuestionAndAnswer() {
  const number1 = generateRandomNumber(1, 50);
  const number2 = generateRandomNumber(1, 50);
  const correctAnswer = calculateGCD(number1, number2);
  const question = `${number1} ${number2}`;
  const answer = String(correctAnswer);
  return [question, answer];
}

const start = () => startGame(getQuestionAndAnswer, rules);

export default start;
