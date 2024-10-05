function BankAcc(CustomerName , balance =0 ){
    this.name = CustomerName
    this.balance = balance
    this.id = Date.now()

    this.deposit = function(amount){
        this.balance += amount
    }

    this.withdraw = (amount) =>{
        this.balance -= amount
    };

}




const Aditya = new BankAcc("Aditya Bhadane" , 1000)

Aditya.deposit(70000)
Aditya.withdraw(2000)
console.log(Aditya);