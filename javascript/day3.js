// // greetToAll()
// // function greetToAll(){
// // console.log("haii All")
// // }

// // greetToAll()


// let apple = function (){

// } 

// // greetToAll()

// function greetToAll(name){
//     let age 
// console.log("haii All" , name, )
// }
// greetToAll('Manju')


// let girls = function (count1,count2){
//   let sum
//    sum = count1+count2

//    return  sum
// }

// console.log(girls(10,15))

// const multiply= (num1, num2)=>{
 
//     let product
//  return   product = num1* num2

// }


// // () =>{

// // }


// let product =multiply(10,60)
// console.log(product)


// // Even or Odd Function
// //  Create a function that takes a number and prints whether it’s even or odd.
// // count even
// function isNumberEvenOrOdd (num){
     

//     if(num%2 === 0){
//         // console.log(`${num} is an even number`)
//         return  `${num} is an even number`
//     }else{
//             // console.log(`${num} is an odd number`)
//                return  `${num} is an odd number`
//     }

// }

// console.log(isNumberEvenOrOdd(20))
// console.log(isNumberEvenOrOdd(21))

// //1. find count of even number from 0 to n
//  function countEven (num){
// let count =0;
// for( let i =0; i<=num; i++){
// if(i%2 === 0){
//     count++;

// }
// }
//  return count 
//  }
//   console.log(countEven(100))

// //2. Sum of 1 to N
// //  Create a function that takes a number n and uses a loop to find the sum of numbers from 1 to n.




//  function sumFromOne (num){
//     let sum=0;
// for( let i =1; i<=num; i++){
// sum +=i
// }
// return sum

//  }
//  console.log(sumFromOne(20))

// //  sum of odd nums from 1 to n

// function oddCount(n){
//     let sum = 0;

//     for(let i = 0; i <=n; i++){

//         if(i % 2 != 0){
//             sum = sum +i;
//         }
//     }

//     return sum;
// }

// console.log(oddCount(10));

 let arr = [23,34,12,45,67]
let length = arr.length

arr.push('this is not a number')
arr.pop()
arr.shift()
arr.unshift(0)
console.log(arr)

// map
const nums = [1,2,3,4,5,6,7,8,9,10]
 let updatedNum ;
 updatedNum = nums.map((element)=>element*2)

    console.log(updatedNum,"updatedNum")
    console.log(nums,"nums")

     let even = nums.filter(num =>  num%2 === 0)

 console.log(even,"even")
//  console.log(arr[0],"arr[0]")

 
//  loop in array
console.log(arr)
 for(let i=0 ;i < arr.length;i++){
    console.log(arr[i],`arr of ${i} th element`)
 }

//  for of loop
// for in loop

// for (let num of nums ){
//     console.log(num)
// }
// for (let i  in nums ){
//     console.log(nums[i])
// }


let fruits = ['Apple', 'Orange','Kiwi']
 
let orangeIndex=fruits.indexOf("Orange")
console.log(orangeIndex,'orangeIndex');

//  refer forEach
//  includes


// [3,6,9,12,15]   find the nums > 6 and add 5 to each

let arr2 =  [3,6,9,12,15]

let result = arr2.filter((num)=>num>6)
                 .map((num)=> num+5)

                 console.log(result)

// find()
let arr3 = [5,8,19,25]
       let output3 = arr3.find((n)=> n>15)
       console.log(output3)

// reduce
// sum
let arr4 = [1,2,3,4]
const sum = arr4.reduce((total, element)=> total+ element)
console.log(sum)

// product of arr5 = [45,34,89,100]

const product = arr4.reduce((total, element)=> total* element)
console.log(product)
            
//  find the avg using reducer

const total= arr4.reduce((total, element)=> total+ element)
console.log(total/arr4.length, "avg")



 










