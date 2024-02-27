var prompt = require("prompt-sync")();

const fn = () => {
  let currentValue = undefined;
  let input = undefined;

  let terminates = false;
  do {
    input = Number(prompt("Enter a number: "));
    console.log("the number you provided is:", input);

    terminates = input <= 50;

    if (input % 5 === 0) {
      console.log(`The current vlaue is ${input} is divisible by 5`);
    }
    if (input % 10 === 0) {
      console.log(`The number is divisible by 10`);
    }
  } while (!terminates);

  currentValue = input;

  console.log(`The current value is ${currentValue}. Terminating the loop.`);
};

fn();
