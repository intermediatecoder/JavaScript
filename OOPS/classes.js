class BankAcc{
    CustomerName ;
    Balance ;
    CustomerId;


    constructor(CustomerName ,CustomerId ,Balance = 0){
        this.CustomerName = CustomerName;
        this.CustomerId = CustomerId
        this.Balance = Balance ;
    }

    deposit(Amount){
        this.Balance += Amount;
    }

    Withdraw(Amount){
        this.Balance -= Amount;
    }
}


const Aditya = new BankAcc("Aditya Bhadane" ,1, 1000000 )
Aditya.deposit(100000)
Aditya.Withdraw(100)
console.log(Aditya);
