#! /usr/bin/env node

import readlineSync from "readline-sync";

const isEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counterRightAnswer = 0;

  while (counterRightAnswer < 3) {
    const randomNumber = Math.floor(100 * Math.random());
    console.log(`Question: ${randomNumber}`);

    const answer = readlineSync.question("Your answer:");

    if (randomNumber % 2 === 0 && answer.toLowerCase() !== "yes") {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was 'yes'}.\nLet's try again, Bill!`
      );
      break;
    } else if (randomNumber % 2 !== 0 && answer.toLowerCase() !== "no") {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was 'no'}.\nLet's try again, Bill!`
      );
      break;
    } else {
      console.log("Correct");
      counterRightAnswer++;
    }
  }

  if (counterRightAnswer === 3) {
    console.log(`Congratulations, Bill`);
  }
};

isEven();
