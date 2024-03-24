import startGame from '../index.js';

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function getQuestionAndAnswer() {
  const randomNumber = Math.floor(Math.random() * 100);
  const question = `${randomNumber}`;
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
}

const start = () => startGame(getQuestionAndAnswer, rules);

export default start;
