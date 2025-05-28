import { CurrentAccount } from "./currentAccount";


const myAccount = new CurrentAccount(5000);
console.log(myAccount.calculateInterest());
console.log(myAccount.getAccountNumber());
console.log(myAccount.deposite(1000));
console.log(myAccount.getBalance());
console.log(myAccount.getCreationDate());
console.log(myAccount.getIntrestRate());
