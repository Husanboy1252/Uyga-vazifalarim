// 1-masala==============================
// function countelement(arr) {
//     let sum = {}
//     let res= 0
//     let newarr = null
// arr.forEach(element => {
//     sum[element] =(sum[element]||0) +1
//     if(sum[element] > res){
//         res = sum[element]
//         newarr =element
//     }
// });

//  return {
//    element: newarr,count:res
//  }
// }console.log(countelement([4,5,5,4,5,6,6,7]));

// 2-masala================================

// function arrsum(arr) {
//    let sum = 0
//    for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%2===0){sum += arr[i]}
//    }return sum
// }
// console.log(arrsum([1,2,3,4,5,6]));

// 3-masala------------------------------
// function arrsum(arr) {
//     let obj = {}
//     let sum = []
//     arr.forEach(item => {
//         obj[item] = (obj[item] || 0 ) +1
//     });
//         for (const [element,count] of Object.entries(obj)) {
//             if(count ===1){
//                 sum.push(element)
//             }
//         }
//     return sum
// }
// console.log(arrsum([1,2,3,2,4,3,5,5]));

// 4-masala================================

// function strrevers(str) {
//     let words = str.split(' ')
//     let reversstr =words.reverse()
//     return reversstr.join(' ')
// }
// console.log(strrevers("Men JavaScript o'rganmoqdaman "));

// 5-masala ============================================

// function Isnubmer(str) {

//       return /^\d+$/.test(str);
// }console.log(Isnubmer("123l45"))

// 6-masala================================================
// function sumarr(arr) {
//     return arr.filter(word => {
//         const counte = word.split('e').length-1
//         return counte > 1

//     })

// }console.log(sumarr(["elephant", "apple", "tree", "cheese", "banana"]));

// 7-masala====================================
// function alfabit(arr) {
//     return arr.filter(word => {
//         const abs =  word.toLowerCase()
//         for (let i = 0; i < abs.length -1; i++) {
//             if(abs[i]> abs[i+1]){
//                 return false
//             }
//         }
//         return true
//     })
// }
// console.log(alfabit(["abs",  "bcd", "banan", "xyz"]));

// 8-masala===========================================
// function toArray(input) {
//   if (typeof input === "number") {
//     return String(input)
//       .split("")
//       .map((d) => parseInt(d));
//   } else if (Array.isArray(input)) {
//     return input;
//   } else {
//     return [];
//   }
// }

// console.log(toArray(234));
// console.log(toArray(0));

// 9 masala==========================

// function measureDepth(arr) {
//   if (!Array.isArray(arr)) return 0;

//   let maxDepth = 0;

//   for (let item of arr) {
//     const depth = measureDepth(item);
//     if (depth > maxDepth) {
//       maxDepth = depth;
//     }
//   }

//   return maxDepth + 1;
// }

// console.log(measureDepth([[[[[[[[[[]]]]]]]]]])); 

// 10-masala
// function arrsum(num) {
//     let res = 0
//     let str = num.toString()
//     for (let i = 0; i < str.length; i++) {
//        res +=parseInt(str[i])
        
//     }return res
// }
// console.log(arrsum(12345));