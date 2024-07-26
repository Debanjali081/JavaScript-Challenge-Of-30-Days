// Task 10 : Create an instance of the Account class and test the deposit and withdraw methods , logging the balance after each operation.

class Account {
    #balance; // Private field for balance

    constructor(initialBalance) {
        if (initialBalance < 0) {
            throw new Error('Initial balance cannot be negative');
        }
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be positive');
        }
        this.#balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be positive');
        }
        if (amount > this.#balance) {
            throw new Error('Insufficient funds');
        }
        this.#balance -= amount;
        console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
    }

    getBalance() {
        return this.#balance;
    }
}

// Create an instance of Account
let myAccount = new Account(1000);

console.log(`Initial balance: $${myAccount.getBalance()}`); // Initial balance: $1000

// Test deposit method
myAccount.deposit(500); // Deposited: $500. New balance: $1500
console.log(`Balance after deposit: $${myAccount.getBalance()}`); // Balance after deposit: $1500

// Test withdraw method
myAccount.withdraw(200); // Withdrew: $200. New balance: $1300
console.log(`Balance after withdrawal: $${myAccount.getBalance()}`); // Balance after withdrawal: $1300

// Test insufficient funds scenario
try {
    myAccount.withdraw(1500); // Should throw an error
} catch (e) {
    console.error(e.message); // Insufficient funds
}

