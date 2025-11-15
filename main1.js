// 1-masala==================================
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise 1 resolved!"), 3000); });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise 2 resolved!"), 2000);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise 3 resolved!"), 11000);
// });

// Promise.race([promise1, promise2, promise3])
//   .then((result) => {
//     console.log("Birinchi resolve boladigan natija:", result);
//   })
//   .catch((error) => {
//     console.log("Xato yuz berdi:", error);
//   });

//   2-masala==============================================

// class Animal {
//   constructor(name, sound) {
//     if (new.target === Animal) {
//       throw new Error("Animal klassi abstrakt bo'lib, uni bevosita yaratib bo'lmaydi");
//     }
//     this.name = name;
//     this.sound = sound;
//   }

//   makeSound() {
//     console.log(`${this.name} says: ${this.sound}`);
//   }
// }

// class It extends Animal {
//   constructor(name) {
//     super(name, "Gav!");
//   }
// }

// class Mushuk extends Animal {
//   constructor(name) {
//     super(name, "Miyav!");
//   }
// }

// class Sigir extends Animal {
//   constructor(name) {
//     super(name, "Moo!");
//   }
// }

// const it = new It("Labrador");
// const mushuk = new Mushuk("Siyam");
// const sigir = new Sigir("Murka");

// it.makeSound();
// mushuk.makeSound();
// sigir.makeSound();

// // 3-masala==============================================
// class Mathhisob {
//   static qoshuv(a, b) {
//     return a + b;
//   }

//   static ayruv(a, b) {
//     return a - b;
//   }

//   static kopaytruv(a, b) {
//     return a * b;
//   }
// }

// console.log("Qo'shish: ", Mathhisob.qoshuv(10, 5));
// console.log("Ayirmani hisoblash: ", Mathhisob.ayruv(10, 5));
// console.log("Ko'paytma: ", Mathhisob.kopaytruv(10, 5));
