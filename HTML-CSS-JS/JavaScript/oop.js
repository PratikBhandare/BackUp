// // inheritance

// class person{
//     constructor(name,age){
//         this.name=name,
//         this.age=age
//     }

//     greet() {
//         console.log(`Hello From ${this.name}`)
//     }
// }

// class emp extends person{
//     constructor(name,age,job){
//         super(name,age),
//         this.job=job
//     }

//     hello(){
//         console.log(this.name)
//     }
// }

// let emp1 = new emp("Pratik", 21, "SDE");
// emp1.hello()






// Bank Account

class Account{
    #balance=0;
    constructor(accountholder,intialbalance){
        this.accountholder=accountholder,
        this.#balance = intialbalance
    }

    deposit(amount){
        (amount>0)? this.#balance+=amount :console.log("Enter Valid Amount")

    }

    withdraw(amount){
        if(amount>this.#balance){
            console.log("Insufficient balance")
        }else if(amount>0){
            this.#balance-=amount
        }else{
            console.log("Enter Valid Amount")
        }
    }

    get(){
        console.log(`current balance is ${this.#balance}`);
    }
}

let p1 = new Account("Pratik",100000000000);
p1.get();
p1.deposit(1000);
p1.get();
p1.withdraw(1);
p1.get();
