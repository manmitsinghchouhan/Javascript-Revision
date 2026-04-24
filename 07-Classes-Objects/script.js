//The Prototype Link

const person = {
    isHuman : true
}

const engineer = {

}

engineer.__proto__ = person;

console.log(engineer.isHuman) // true



//Class to object 

class Account {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance; // Keep as a number
    }

    deposit(amount) {
        this.balance += amount; // Simplified: balance = balance + amount
        console.log(`Total balance after deposit: ${this.balance}`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Balance after withdrawal: ${this.balance}`);
        } else {
            console.log("Insufficient funds.");
        }
    }
}

let account1 = new Account("Dhoni", 5000); 

account1.deposit(1000);   // Balance: 6000
account1.withdraw(2000);  // Balance: 4000



//Class Inheritance

class Employee {
    constructor(name) {
        this.name = name
    }
    
    work(){
        console.log(`${this.name} is working `)
    }
}

class Developer extends Employee{
    constructor(name,language){
        super(name)
        this.language = language;

    }
    work(){
        console.log(`${this.name} is coding in ${this.language} `)
    }
}

let Dev = new Developer("dev","python");
let Dev2 = new Developer("dev2","c++")
Dev.work();// dev is coding in python
Dev2.work();// dev2 is coding in c++  