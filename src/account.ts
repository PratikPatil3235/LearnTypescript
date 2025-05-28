export abstract class Account {
  private balance: number;
  static bankName = "Bank Of MediaNV";
  protected accountNo: number = Math.floor(1e15 + Math.random() * 9e15);
  readonly date: Date = new Date();

  constructor(balance: number) {
    this.balance = balance;
  }
  public deposite(amount: number): string {
    if (amount > 0) {
      this.balance += amount;
      return `Amount has been deposited into you account`;
    } else {
      return `Please Enter valid Amount`;
    }
  }

  public withdraw(amount: number): string {
    if (amount > this.balance) {
      return `Insufficient Balance`;
    } else {
      this.balance -= amount;
      return `amount ${amount} has been debited from your account`;
    }
  }

  public getBalance(): number {
    return this.balance;
  }

  public getAccountNumber(): number {
    return this.accountNo;
  }

  public getCreationDate(): string {
    const day = String(this.date.getDate()).padStart(2, "0");
    const month = String(this.date.getMonth() + 1).padStart(2, "0");
    const year = String(this.date.getFullYear()).slice(-2);

    return `${day}-${month}-${year}`;
  }

  public abstract calculateInterest(): number;
}
