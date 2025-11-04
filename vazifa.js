// 1-masala ------------------------------
// function palendrom(str) {
//     let res =str.toLowerCase()
//     let revers = ""
//     for (let i = str.length-1; i >= 0 ; i--) {
//         revers += str[i]

//     }
//     return res=== revers
// }
// console.log(palendrom("leval"));

// 3- masala----------------------

// const swapWithMap = (arr, a, b) => {
//   return arr.map((item, index) => {
//     if (index === a) return arr[b];
//     if (index === b) return arr[a];
//     return item;
//   });
// };

// console.log(swapWithMap([1, 22, 13, 4], 1, 2));

// 4-masala----------------------------------

// function letterFrequency(str) {
//   let strr = str.toLowerCase();
//   let res = {};
//   for (const element of strr) {
//     if (res[element]) {
//       res[element] += 1;
//     } else {
//       res[element] = 1;
//     }
//   }
//   return res;
// }

// console.log(letterFrequency("javascript"));


// 5-masala---------------------------

// function isAnagram(str1, str2) {
//   const a = {};
//   const b = {};

//   for (let i = 0; i < str1.length; i++) {
//     a[str1[i]] = (a[str1[i]] || 0) + 1;
//   }

//   for (let i = 0; i < str2.length; i++) {
//     b[str2[i]] = (b[str2[i]] || 0) + 1;
//   }

//   if (Object.keys(a).length !== Object.keys(b).length) return false;

//   for (let key in a) {
//     if (a[key] !== b[key]) return false;
//   }

//   return true;
// }

// console.log(isAnagram('listen', 'silent')); 
// console.log(isAnagram('hello', 'world'));   

// 6-masla----------------------------

// function longestUniqueSubstring(str) {
//   let maxLen = 0;
//   let maxSubstr = '';
//   let currentSubstr = '';

//   for (let ch of str) {
//     if (currentSubstr.includes(ch)) {
//       currentSubstr = currentSubstr.slice(currentSubstr.indexOf(ch) + 1);
//     }
//     currentSubstr += ch;
//     if (currentSubstr.length > maxLen) {
//       maxLen = currentSubstr.length;
//       maxSubstr = currentSubstr;
//     }
//   }

//   return maxSubstr;
// }
// console.log(longestUniqueSubstring('abcabcbb')); 
// console.log(longestUniqueSubstring('bbbbb'));    

// 7-masala----------------------
// function kadane(arr) {
//     let maxSum = arr[0];
//     let currentSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         currentSum = Math.max(arr[i], currentSum + arr[i]);
//         maxSum = Math.max(maxSum, currentSum);
//     }
//     return maxSum;
// }

// console.log(kadane([-2, 1, -3, 4, -1, 2, 1, -5, 4])); 

// 8-masala-----------------------
// function findTwoSum(arr,num) {
//     let res =[]
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
            
//            if(arr[i]+arr[j]===num){ res.push(arr[i],arr[j])}
        
//         }
//     }return res
// }
// console.log(findTwoSum([2,4,7,11,15],9));



// 9-masala-----------------------
// function kopayish(arr) {
//   let res = [arr[0]];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > res[res.length - 1]) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }
// console.log(kopayish([1, 4, 200, 201, 1]));

// 10-masala----------------------

// function sonlar(arr) {
//     let manfiy=0
//     let musbat=0
//     for (let i = 0; i < arr.length; i++) {
//        if(manfiy<arr[i]){
//         manfiy+=arr[i]
//        }else{musbat+=arr[i]}
//     }
//     return [ manfiy,musbat]

// }
// console.log(sonlar([1,-2,3,-4,5]));
