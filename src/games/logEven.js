import startGame from '../index.js';
import getRandomNumber from '../utils.js';

function isEven(number) {
  return number % 2 === 0;
}

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

function getQuestionAndAnswer() {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
}

const startIsEven = () => startGame(getQuestionAndAnswer, rules);

export default startIsEven;
