// 1. Deposit money
// 2. Determine number of lines to bet on
// 3. Collect bet amount
// 4. Spin the slot machine
// 5. Determine if the user won
// 6. Give the user their winnings or take the bet
// 7. Play again or handle if the user has no money left

// Gaining access to package to gather user data
const prompt = require("prompt-sync")();

// 1. Getting user input for deposit until given a valid amount (1 or higher)
const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount); // Converting depositAmount from a string to an integer

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, please try again.");
    } else {
      return numberDepositAmount;
    }
  }
};

// 2. Getting user input for number of lines until given a valid amount (Between 1 to 3)
const getNumberOfLines = () => {
  while (true) {
    const lines = prompt(
      "Enter the number of lines you'd like to bet on (1-3): "
    );
    const numberOfLines = parseFloat(lines); // Converting numberOfLines from a string to an integer

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines, please try again.");
    } else {
      return numberOfLines;
    }
  }
};

// 3. Get bet amount
const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet per line: ");
    const numberBet = parseFloat(bet); // Converting bet from a string to an integer

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
      // Ensuring that the inputted bet amount is lower than the current balance
      console.log("Invalid bet, please try again.");
    } else {
      return numberBet;
    }
  }
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
