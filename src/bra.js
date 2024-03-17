import { welcomeUser } from '../src/cli.js';
import readlineSync from 'readline-sync';

export default function isEven(number) {
    return number % 2 === 0;
  }
  
 export function playGame() {
    let correctAnswersCount = 0;
    const requiredCorrectAnswers = 3;
    const userName = welcomeUser();

    console.log('Answer "yes" if the number is even, and "no" if it is odd.');
  
    while (correctAnswersCount < requiredCorrectAnswers) {
      const randomNumber = Math.floor(Math.random() * 100);
      console.log(`Question: ${randomNumber}`);
      const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  
      if ((isEven(randomNumber) && userAnswer === 'yes') || (!isEven(randomNumber) && userAnswer === 'no')) {
        console.log('Correct!');
        correctAnswersCount++;
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${!isEven(randomNumber) ? 'no' : 'yes'}'.`);
        console.log(`Let's try again, ${userName}!\n`);
        correctAnswersCount = 0; // Сбросить счетчик правильных ответов
      }
    }
  
    console.log(`Congratulations, ${userName}`);
  }