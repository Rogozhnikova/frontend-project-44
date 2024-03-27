import startGame from '../index.js';
import getRandomNumber from '../utils.js';

function calculateGCD(a, b) {
  if (b === 0) {
    return a;
  }
  return calculateGCD(b, a % b);
}

const rules = 'Find the greatest common divisor of given numbers.';

function getQuestionAndAnswer() {
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);
  const correctAnswer = calculateGCD(number1, number2);
  const question = `${number1} ${number2}`;
  const answer = String(correctAnswer);
  return [question, answer];
}

const startGcd = () => startGame(getQuestionAndAnswer, rules);

export default startGcd;
