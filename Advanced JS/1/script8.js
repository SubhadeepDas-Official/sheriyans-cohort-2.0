// Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.
// 	8.	Inside the constructor, store both values using this.
// 	9.	Add a method deposit(amount) that increases the balance.
// 	10.	Create two bank accounts and deposit money into only one.
// Observe and explain why the second account is not affected.

class BankAccount{
    constructor(accountHolderName, balance){
        this.accountHolderName = accountHolderName;
        this.balance = balance;
        this.deposit = function(depositAmount){
            return balance + depositAmount;
        }
    }
}
let b1 = new BankAccount("harsh", 2300)
let b2 = new BankAccount("Raj", 2300)