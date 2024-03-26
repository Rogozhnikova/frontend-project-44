import startGame from '../index.js';

function generateArithmeticProgression(length) {
  const progression = [];
  const tail = Math.floor(Math.random() * 10);
  const difference = Math.floor(Math.random() * 5) + 1;

  for (let i = 0; i < length; i += 1) {
    progression.push(tail + i * difference);
  }
  return progression;
}

const rules = 'What number is missing in the progression?';

function getQuestionAndAnswer() {
  const minLength = 5;
  const length = Math.floor(Math.random() * 6) + minLength;
  const progression = generateArithmeticProgression(length);
  const position = Math.floor(Math.random() * progression.length);
  const hiddenNumber = progression[position];
  const updatedProgression = [...progression];
  updatedProgression[position] = '..';
  const correctAnswer = hiddenNumber;
  const answer = String(correctAnswer);
  const question = updatedProgression.join(' ');
  return [question, answer];
}

const startProgression = () => startGame(getQuestionAndAnswer, rules);

export default startProgression;
