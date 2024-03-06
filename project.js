// 1. Deposit money
// 2. Determine number of lines to bet on
// 3. Collect bet amount
// 4. Spin the slot machine
// 5. Determine if the user won
// 6. Give the user their winnings or take the bet
// 7. Play again or handle if the user has no money left

// Gaining access to package to gather user data
const prompt = require("prompt-sync")();

// Getting user input for deposit until given a valid amount (1 or higher)
const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount); // Converting depositAmount to an integer

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, please try again.");
    } else {
      return numberDepositAmount;
    }
  }
};

const depositAmount = deposit();

// Testing
console.log(depositAmount);
