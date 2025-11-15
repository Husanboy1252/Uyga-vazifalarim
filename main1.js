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



// 4-masala===================================================
class Person {
  // Maxfiy xususiyatlar (privat)
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }


  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
  }

  setName(newName) {
    this.#name = newName;
  }

  setAge(newAge) {
    if (newAge > 0) {
      this.#age = newAge;
    } else {
      console.log("Yosh musbat bolishi kerak");
    }
  }
}


const person1 = new Person("husanboy", 25);


console.log(person1.getName());
console.log(person1.getAge()); 


person1.setName("Olim");
person1.setAge(30);


console.log(person1.getName()); 
console.log(person1.getAge());  


person1.setAge(-5); 