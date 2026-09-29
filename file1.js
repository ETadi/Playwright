const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer));
  });
}

async function main() {
  console.log('Simple Calculator');

  const firstInput = await ask('Enter first number: ');
  const operator = await ask('Enter operator (+, -, *, /): ');
  const secondInput = await ask('Enter second number: ');

  const num1 = Number(firstInput);
  const num2 = Number(secondInput);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    console.log('Invalid input. Please enter valid numbers.');
    rl.close();
    return;
  }

  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        console.log('Error: division by zero is not allowed.');
        rl.close();
        return;
      }
      result = num1 / num2;
      break;
    default:
      console.log('Invalid operator. Use +, -, *, or /.');
      rl.close();
      return;
  }

  console.log(`Result: ${result}`);
  rl.close();
}

main().catch((error) => {
  console.error('An error occurred:', error.message);
  rl.close();
});
