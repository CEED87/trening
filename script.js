
// function digitalRoot(n) {
//     let sum = n;
//     while (String(sum).length != 1) {
//       sum = String(sum).split('').reduce((a, b) => {
//         return a + Number(b);
//       }, 0);
//     }
//     console.log(sum)
//   }
  
//   digitalRoot(16);
//   digitalRoot(456);

// ===========================================



// Test.assertSimilar(tribonacci([1,1,1],10),[1,1,1,3,5,9,17,31,57,105])
// Test.assertSimilar(tribonacci([0,0,1],10),[0,0,1,1,2,4,7,13,24,44])
// Test.assertSimilar(tribonacci([0,1,1],10),[0,1,1,2,4,7,13,24,44,81])
// Test.assertSimilar(tribonacci([1,0,0],10),[1,0,0,1,1,2,4,7,13,24])
// Test.assertSimilar(tribonacci([1,1,1],1),[1])
// Test.assertSimilar(tribonacci([300,200,100],0),[])


// function tribonacci(signature,n){
//     let arr = [];
//     for (let i = 0; i < n; i++) {
        
//         if (arr.length <= 2 ) {
//             arr.push(signature[i]);
//         }
//         if (arr.length === 3) {
            
//             arr.push(arr.reduce((a, b) => {
//                         return a + Number(b);
//                     }));
//         } 
//         if (arr.length > 3 && arr.length <= n - 1) {
//             arr.push(arr[arr.length - 1] 
//                 + (arr[arr.length - 2]+arr[arr.length - 3]));
//         }
       
//     }
//     console.log(arr);
//   }
  

// tribonacci([1,1,1],10);
// tribonacci([0,0,1],10);
// tribonacci([0,1,1],10);
// tribonacci([1,1,1],1);
// tribonacci([300,200,100],0);
// tribonacci([0.5,0.5,0.5],30)

// ============================================================

// Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
// Test.assertEquals(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
// Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");

function createPhoneNumber(numbers){
    let arr = '(xxx) xxx-xxxx';
   
    for (let i = 0; i < numbers.length; i++) {
       arr = arr.replace('x',numbers[i])
        
    }
      return arr; 

}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));