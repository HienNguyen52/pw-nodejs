const readline = require('readline-sync');
// Creating the bankAccout Object

const bankAccount = {
    accountNumber: '11111',
    routingNumber: '78910',
    balance: 1000000
};

// Clone to another bank Account object and put into the bankAccounts Array
let bankAccount2 = { ...bankAccount };
bankAccount2.accountNumber = '22222';
let bankAccounts = [bankAccount, bankAccount2];

// Write the console log interface app

let isTransaction = true;
while (isTransaction) {
    printTransactionMenu();
    let userOption = getUserOption();
    if (userOption == 0) {
        isTransaction = false
    } else if (userOption == 1) {
        generateBankAccountInfo()
    } else if (userOption == 2) {
        withdrawMoney()
    } else {
        console.log("Please select the option in the menu");
    };
}
console.log("See you later");

function printTransactionMenu() {
    console.log(" Transaction Options");
    console.log("1. Find an account");
    console.log("2. Update balance");
    console.log("0. Exit the program\n");
};

function getUserOption() {
    return readline.question('Please select an option in the menu: ')
};

function generateBankAccountInfo() {
    let accountNumber = readline.question('Please input your Account Number: ');

    for (let index = 0; index < bankAccounts.length; index++) {
        let bankAccount = bankAccounts[index]
        if (accountNumber == bankAccount.accountNumber) {
            console.log(`Your account Number is: ${accountNumber} and your balance is : ${bankAccount.balance}`);
            return;
        }
    }

    console.log('The account Number does not exist');

};

function withdrawMoney() {
    let accountNumber = readline.question('Please input your Account Number: ');
    console.log(bankAccounts);
    let amount = readline.question('Please input your amount: ');
    if (amount <= 0) {
        console.log('Please input valid amount');
        return;
    }


    for (let index = 0; index < bankAccounts.length; index++) {
        let bankAccount = bankAccounts[index]
        if (accountNumber == bankAccount.accountNumber) {
            if (bankAccount.balance >= amount) {
                bankAccount.balance = bankAccount.balance - amount
                console.log(`Your current balance is ${bankAccount.balance}`);
            } else {
                console.log('Your balance is unsufficient');
            }
            return;
        }

    }
    console.log('The account Number does not exist\n');
}
