// 1-masala====================

// function arrsum(arr, num) {
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//     //   for (let j = 0; j < arr.length; j++) {
//         if(arr[i]<=num||arr[i]>= num){
//             res.push (arr[i])
//         }
//     //   }
//     }return res

// }console.log(arrsum([21, 43, 11,45, 4, 32, 54],35));

// 2-masala===========================

// function res(arr) {
//     let sum=[]
//     let son=0
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%2===0){
//             son = arr[i]
//             break
//         }
//     }
//     for (let j = 0; j < arr.length; j++) {
//        if (arr[j]%2===0) {
//         sum.push(arr[j]+son)
//        }else{sum.push(arr[j])}
//     }return sum
// }
// console.log(res([1, 4, 5, 2, 33, 1, 8, 22]));

//3 -masala================================
// function res(arr) {
//   let arr1 = arr[arr.length - 1];
//   let sum = [];
//   if (arr1 % 2 !== 0) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 !== 0) {
//         sum.push(arr[i] + arr1);
//       }
//     }

//   }else{
//     sum.push(arr)
//   }
//   return sum;
// }
// console.log(res([1, 3, 4, 5, 6, 1]));

// 4-masala ================================
// function arrsum(arr) {
//   let katta = arr[0];
//   let kichik = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (katta < arr[i]) {
//       katta = arr[i];
//     }
//     if (kichik > arr[i]) {
//       kichik = arr[i];
//     }
// }
//     let result = [];
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] === katta) {
//         result.push(kichik);
//       } else if (arr[j] === kichik) {
//         result.push(katta);
//       } else {
//         result.push(arr[j]);
//       }
//     }
//   return result;
// }
// console.log(arrsum([3, 43, 12, 56, 64]));

// 5-masala==================================

// function arrsum(arr) {
//   let kichik = arr[0];
//   let katta = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (katta < arr[i]) {
//       katta = arr[i];
//     }
//     if (kichik > arr[i]) {
//       kichik = arr[i];
//     }
//   }
  
//   let minindex = arr.indexOf(kichik)
//   let maxindex = arr.indexOf(katta)
//   let kichikindex = minindex < maxindex ? minindex : maxindex
//   let kattaindex = minindex > maxindex ? minindex : maxindex


//   let obj= {}
//   for (let i = 0; i < arr.length; i++) {
//     if (i> kichikindex && i < kattaindex) {
//         obj[i] = 0
        
//     }else{
//         obj[i]=arr[i]
//     }
// }

// let result = Object.values(obj)
// return result

// }
// console.log(arrsum([2, 54, 4, 11, 1, 34, 11]));

// arraydagi eng katta va eng kichik elementlarni orasini teskari tartibda chiqarish


//  6-masala=====================================


// function arrsum(arr) {
//   let katta = 0;
//   let kichik = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     let belgi = arr[i];
//     if (katta < belgi) {
//       katta = belgi;
//     }
//     if (kichik > belgi) {
//       kichik = belgi;
//     }
//   }

//   let minIndex = arr.indexOf(kichik);
//   let maxIndex = arr.indexOf(katta);

//   let kichikIndex = minIndex < maxIndex ? minIndex : maxIndex;
//   let kattaIndex = minIndex > maxIndex ? minIndex : maxIndex;

//   let sum = [];
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i > kichikIndex && i < kattaIndex) {
//       sum.unshift(arr[i]);
//     } else if (i === kattaIndex) {
//       sum.push(arr[i]);
//       result.push(sum);
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   let array = result.flat(Infinity);
//   return array;
// }

// console.log(arrsum([2, 54, 4, 11, 1, 34, 11]));


// 7-masala======================================

// function arrsum(arr, ochirish) {

//     let sum = []
//     for (let i = 0; i < arr.length; i++) {
//         if (i !== ochirish) {
//             sum.push(arr[i])
//         }
//     }
// return sum
// }

// console.log(arrsum([54, 23, 65, 12], 1));

// 8- masala

// / function arrsum(arr) {
//   let sum = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       i++;
//     } else {
//       sum.push(arr[i]);
//     }
//   }
//   return sum;
// }

// console.log(arrsum([12, 43, 43, 23, 23, 54, 12, 23]))

// 9-masala

//  function arrsum(arr) {
//   let sanash = [];
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     obj[arr[i]] = (obj[arr[i]] || 0) + 1;
//   }
//   for (const key in obj) {
//     if (obj[key] === 3) {
//       sanash.push(+key);
//     }
//   }
//   return sanash;
// }

// console.log(arrsum([12, 12, 44, 54, 44, 44, 2, 22, 2, 2]))

// 10-masla=====================================


// function arrsum(arr) {
//   let summa = [];
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     obj[i] = arr[i];
//   }
//   for (const key in obj) {
//     if (obj[key] % 2 === 0) {
//       summa.push(+key);
//     }
//   }
//   let sum = "";
//   for (let i = 0; i < summa.length; i++) {
//     if (sum === "") {
//       sum = ${summa[i]} ;
//     } else {
//       sum += + ${summa[i]} ;
//     }
//   }
//   return sum;
// }

// console.log(arrsum([2, 43, 53, 23, 22, 53, 88, 10]));