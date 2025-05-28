import { Account } from "./account";

export class CurrentAccount extends Account{
    private interastRate: number = 12.45;
    constructor(balance: number) {
        super(balance);
    }

    public calculateInterest(): number {
        const balance = this.getBalance();
        return (balance * this.interastRate) / 100;
    }

    public getIntrestRate(): number{
        return this.interastRate;
    }
    public setInterestRate(rate:number):void{
        this.interastRate = rate;
        console.log(`Interest Rate has been set to a ${this.interastRate}`);
    }
}