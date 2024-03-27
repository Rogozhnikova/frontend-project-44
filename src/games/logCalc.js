import startGame from '../index.js';
import getRandomNumber from '../utils.js';

function generateRandomOperator() {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
}

function calculateExpression(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
}

const rules = 'What is the result of the expression?';

function getQuestionAndAnswer() {
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);
  const operator = generateRandomOperator();
  const correctAnswer = calculateExpression(number1, number2, operator);
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(correctAnswer);
  return [question, answer];
}

const startCalculator = () => startGame(getQuestionAndAnswer, rules);

export default startCalculator;
