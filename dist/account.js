"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    ;
    constructor(balance) {
        this.accountNo = Math.floor(1e15 + Math.random() * 9e15);
        this.date = new Date();
        this.balance = balance;
    }
    deposite(amount) {
        if (amount > 0) {
            this.balance += amount;
            return `Amount has been deposited into you account`;
        }
        else {
            return `Please Enter valid Amount`;
        }
    }
    withdraw(amount) {
        if (amount > this.balance) {
            return `Insufficient Balance`;
        }
        else {
            this.balance -= amount;
            return `amount ${amount} has been debited from your account`;
        }
    }
    getBalance() {
        return this.balance;
    }
    getAccountNumber() {
        return this.accountNo;
    }
    getCreationDate() {
        const day = String(this.date.getDate()).padStart(2, '0');
        const month = String(this.date.getMonth() + 1).padStart(2, '0');
        const year = String(this.date.getFullYear()).slice(-2);
        return `${day}-${month}-${year}`;
    }
}
exports.Account = Account;
Account.bankName = "Bank Of MediaNV";
