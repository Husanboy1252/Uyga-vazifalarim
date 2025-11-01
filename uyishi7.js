// 1- masala -------
// class person{
//     constructor(name,age){
//      this.name=name
//      this.age=age
//     }
//     great (){
//         return` Salom ${this.name}`
//     }
// }
// let res=new person("Husanboy" ,27)
// console.log(res.great());

// 2-masala-----------

// class BankAccount{
//     constructor(balance){
//         this.balance=balance
//     }
//     deposit(sum){
//         if(sum>0){
//             return this.balance+=sum}
//             return "manfi mablag' kirtish mumikn emas"
//     }
//     withdraw(sum){
//         if(sum>this.balance){
//         return " balnsdagi mablag' yetarli emas"
//         }
//       return  this.balance -= sum

//     }
// }
// let bankoccount = new BankAccount(200)
// console.log(bankoccount.deposit(-400));
//  console.log(bankoccount.withdraw(700));

// 3- masala----------

// class Rectangle{
//     constructor(width,height){
//         this.width=width
//         this.height=height
//     }
//     area(){
//         return this.width*this.height
//     }
//     perimetr(){

//        return `maydoni ${2*(this.height+this.width)}`
//     }
// }
// let resalt= new Rectangle(3,5)
// console.log(resalt.perimetr());
// console.log(resalt.area());

// 4- masla--------------

// class student {
//     constructor(name, id, grades=[]){
//         this.name=name
//         this.id=id
//         this.grades=grades
//     }
//     calculateAvrage(){
//       let sum=0
//       for (let i = 0; i < this.grades.length; i++) {
//         sum+=this.grades[i]
//     }
//     let res=  sum/this.grades.length
//       return res
//     }

// }
// let newstudent=new student("husanboy","123454",[4,5,3,4])
// console.log(newstudent.calculateAvrage());

// 6- masala---------------------------

// class oylikmosh {
//   constructor(name, position, salary) {
//     this.name = name;
//     this.position = position;
//     this.salary = salary;
//   }
//   giveRaise(persentage) {
//     let res = (this.salary += persentage);
//     return res;
//   }
// }

// let sum = new oylikmosh("husanboy", "IT menger", 5548);

// console.log(sum.giveRaise(50));

// 7-masala

class Order {
  constructor() {
    this.items = [];
  }

  addItem(item, quantity, price) {
    this.items.push({ item, quantity, price });
  }

  removeItem(item) {
    this.items = this.items.filter((i) => i.item !== item);
  }

  calculateTotal() {
    let total = 0;
    for (let i of this.items) {
      total += i.quantity * i.price;
    }
    return total;
  }
}

const myOrder = new Order();
myOrder.addItem("Olma", 3, 2);
myOrder.addItem("Banan", 2, 3);

console.log("Jami:", myOrder.calculateTotal());

myOrder.removeItem("Banan");

console.log("Jami after removal:", myOrder.calculateTotal());

// 8-masala

// class myMath {

//   static Plas(a,b){
//     return a+b
//   }
//   static Minus(a,b){
//     return a-b
//   }

//   static Kop(a,b){
//     return (a*b)
//   }
//   static Bol(a,b){
//     return a/b
//   }
// }
// console.log(myMath.Plas(12,2));

// 9-masala

// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   push(element) {
//     this.items.push(element);
//   }

//   pop() {
//     return this.items.pop();
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }
// }

// const stack = new Stack();

// stack.push(1);
// stack.push(2);
// console.log(stack.pop());
// console.log(stack.isEmpty());
// console.log(stack.pop());
// console.log(stack.isEmpty());

// 10 masala---------------------------
// Vehicle klassini yaratamiz
// class Vehicle {
//   constructor(speed, fuel) {
//     this.speed = speed;
//     this.fuel = fuel;
//   }

//   getSpeed() {
//     return this.speed;
//   }

//   getFuel() {
//     return this.fuel;
//   }
// }

// const myVehicle = new Vehicle(60, 10);

// console.log("Tezlik:", myVehicle.getSpeed());
// console.log("Yonilg’i:", myVehicle.getFuel());

// class User {
//   static login(username, password) {
//     let data = [
//       { username: "aziz", password: "a1234" },
//       { username: "bobur", password: "b1234" },
//       { username: "husanboy", password: "h1234" },
//     ];
//     const foundeduser = data.find((user) => user.username === username);

//     if (!foundeduser) {
//       return "username not found";
//     } else {
//       const check = foundeduser.password === password;
//       if (!check) {
//         return "Wrong password";
//       }
//       return true
//     }
//   }
// }
//  console.log(User.login("azia","a1234"));
