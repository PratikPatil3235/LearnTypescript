"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentAccount = void 0;
const account_1 = require("./account");
class CurrentAccount extends account_1.Account {
    constructor(balance) {
        super(balance);
        this.interastRate = 12.45;
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
exports.CurrentAccount = CurrentAccount;
