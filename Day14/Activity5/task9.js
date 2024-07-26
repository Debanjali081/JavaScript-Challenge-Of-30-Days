// Task 9 : Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods .

class Account {
    #balance; // Private field for balance

    constructor(initialBalance) {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative.");
        }
        this.#balance = initialBalance;
    }

    // Method to deposit money
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive.");
        }
        this.#balance += amount;
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive.");
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient funds.");
        }
        this.#balance -= amount;
    }

    // Method to get the current balance (read-only)
    getBalance() {
        return this.#balance;
    }
}

// Create an instance of Account
const myAccount = new Account(100);

// Deposit money
myAccount.deposit(50);
console.log(myAccount.getBalance()); // 150

// Withdraw money
myAccount.withdraw(30);
console.log(myAccount.getBalance()); // 120

// Attempt to access private field directly (will result in an error)
// console.log(myAccount.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
