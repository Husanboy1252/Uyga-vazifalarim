

// 2-masala

// String.prototype.strrevers = function () {
//   let revers = "";
//   for (let i = this.length; i > 0; i--) {
//     revers += this[i - 1];
//   }
//   return revers;
// };
// let sum = "husanboy";
// console.log(sum.strrevers());

//3-masala
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.sayHello = function() {
//     return `uzbekiston poytaxti  ${this.name}!`;
// };

// let person = new Person("Toshkent");
// console.log(person.sayHello());

// // 4-masala
// Array.prototype.juftsonlar = function() {
//     return this.filter(num => num % 2 === 0);
// };

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let num = numbers.juftsonlar();
// console.log(num);

// 5- masala

// Array.prototype.Concat = function () {
//   let resultArray = [];

//   for (let i = 0; i < this.length; i++) {
//     resultArray.push(this[i]);
//   }

//   for (let j = 0; j < arguments.length; j++) {
//     if (Array.isArray(arguments[j])) {
//       for (let k = 0; k < arguments[j].length; k++) {
//         resultArray.push(arguments[j][k]);
//       }
//     } else {
//       resultArray.push(arguments[j]);
//     }
//   }

//   return resultArray;
// };
// let a = [1, 3, 4, 5, 6];
// let b = [6, 7, 8, 9];
// let c = "9,7,6,5";
// let result = a.Concat(b, c, [7, 8]);
// console.log(result);

// 6- masala
// Object.prototype.objkeys = function() {
//     return Object.keys(this).map(key => this[key]);
// };

// let obj = { a: 1, b: 2, c: 3 };
// let qiymat = obj.objkeys();
// console.log(qiymat);

// 7- masala
// Object.prototype.getEntries = function () {
//   let entriesArray = [];
//   for (let key in this) {
//     if (this.hasOwnProperty(key)) {
//       entriesArray.push([key, this[key]]);
//     }
//   }
//   return entriesArray;
// };

// let person = {
//   name: "Husanboy",
//   age: 25,
//   country: "Uzbekiston",
// };

// let entries = person.getEntries();
// console.log(entries);

// 8-masala
// String.prototype.mysdsf = function () {
//   let res = [this.length];
//   for (let i = 1; i < this.length; i++) {
//     if (this[this.length - 1] % 2 === 0) {
//       res.push(2);break
//     }
//   }
//   return res;
// };
// let resalt = "123456";
// console.log(resalt.mysdsf());

// 9- masala
// Array.prototype.Myslice=function(){
//     let res=[]
//     for (let i = 0; i < this.length; i++) {
//       res=this[i]
//     }
// return res.slice(0,5)
// }
// let sum=["hello world"]
// console.log(sum.Myslice());
