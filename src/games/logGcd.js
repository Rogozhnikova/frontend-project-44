import startGame from '../index.js';
import randomNumber from '../randomNumber.js';

function calculateGCD(a, b) {
  if (b === 0) {
    return a;
  }
  return calculateGCD(b, a % b);
}

const rules = 'Find the greatest common divisor of given numbers.';

function getQuestionAndAnswer() {
  const number1 = randomNumber(1, 50);
  const number2 = randomNumber(1, 50);
  const correctAnswer = calculateGCD(number1, number2);
  const question = `${number1} ${number2}`;
  const answer = String(correctAnswer);
  return [question, answer];
}

const start = () => startGame(getQuestionAndAnswer, rules);

export default start;
