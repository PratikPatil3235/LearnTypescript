"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingsAccount = void 0;
const account_1 = require("./account");
class SavingsAccount extends account_1.Account {
    constructor(balance) {
        super(balance);
        this.interastRate = 22.54;
    }
    calculateInterest() {
        const balance = this.getBalance();
        return (balance * this.interastRate) / 100;
    }
    getIntrestRate() {
        return this.interastRate;
    }
    setInterestRate(rate) {
        this.interastRate = rate;
        console.log(`Interest Rate has been set to a ${this.interastRate}`);
    }
}
exports.SavingsAccount = SavingsAccount;
