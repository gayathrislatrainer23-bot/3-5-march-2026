// greetToAll()
// function greetToAll(){
// console.log("haii All")
// }

// greetToAll()


let apple = function (){

} 

// greetToAll()

function greetToAll(name){
    let age 
console.log("haii All" , name, )
}
greetToAll('Manju')


let girls = function (count1,count2){
  let sum
   sum = count1+count2

   return  sum
}

console.log(girls(10,15))

const multiply= (num1, num2)=>{
 
    let product
 return   product = num1* num2

}


// () =>{

// }


let product =multiply(10,60)
console.log(product)


// Even or Odd Function
//  Create a function that takes a number and prints whether it’s even or odd.
// count even
function isNumberEvenOrOdd (num){
     

    if(num%2 === 0){
        // console.log(`${num} is an even number`)
        return  `${num} is an even number`
    }else{
            // console.log(`${num} is an odd number`)
               return  `${num} is an odd number`
    }

}

console.log(isNumberEvenOrOdd(20))
console.log(isNumberEvenOrOdd(21))

//1. find count of even number from 0 to n
 function countEven (num){
let count =0;
for( let i =0; i<=num; i++){
if(i%2 === 0){
    count++;

}
}
 return count 
 }
  console.log(countEven(100))

//2. Sum of 1 to N
//  Create a function that takes a number n and uses a loop to find the sum of numbers from 1 to n.




 function sumFromOne (num){
    let sum=0;
for( let i =1; i<=num; i++){
sum +=i
}
return sum

 }
 console.log(sumFromOne(20))

//  sum of odd nums from 1 to n

function oddCount(n){
    let sum = 0;

    for(let i = 0; i <=n; i++){

        if(i % 2 != 0){
            sum = sum +i;
        }
    }

    return sum;
}

console.log(oddCount(10));





















