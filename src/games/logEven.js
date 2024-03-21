import startGame from '../index.js';

function isEven(number) {
  return number % 2 === 0;
}

const rules = 'Answer "yes" if the number is even, and "no" if it is odd.';

function getQuestionAndAnswer() {
  const randomNumber = Math.floor(Math.random() * 100);
  const question = `${randomNumber}`;
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
}

const start = () => startGame(getQuestionAndAnswer, rules);

export default start;
