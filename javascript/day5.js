// objects

const person = {
    name: "Manju",
    age: 23,
    city: "Chennai",
}
 console.log(person.name) 
//   object.key

console.log(person["city"])

person.gender = 'Female'
person.age = 25
// delete person.age
console.log(person)


for(let key in person){
    console.log(` ${key} : ${person[key]}`)
}

//  Task 1 – Create and Access
// Create an object book with keys: title, author, and pages.
//  Print the author name using both dot and bracket notation.

//  Task 2 – Add and Update
// Create an object user with properties name and age.
//  Add a new property email and update the age.

// object utility methods
//  return array

console.log(Object.keys(person))
console.log(Object.values(person))
// [[age,32],[name,"MANJU"],[]]

keyValue =Object.entries(person)
 console.log(keyValue)

 let person2 = {
     name: "Manu",
    age: 35,
    city: "Chennai",
    sayHello : function (a){
        console.log(this.name + " "+this.age + " "+ a)
    },
    address: {
        houseNo: 34,
        street:""
    },
     subject : ['Maths', 'Chemistry', "Physics"]
 }
let street = person2.address.street

 let output4=person2.sayHello('p')

//  Task 4 – Method Example
// Create an object calculator with methods:
// add(a,b) → returns sum


// sub(a,b) → returns difference
//  Call both methods and print results.

let calculator  ={
    add : (a,b)=>{
return a+b
    },
sub : (a,b)=>{
    if(a>b){
        
        return a-b
    }else{
        return b-a
    }
}
}

  let sum =calculator.add(3,5)
   console.log(sum)
   console.log(calculator.sub(20,5));

   
//  Task 3 – Loop Through
// Create an object student with 3 subjects and marks.
//  Loop through and print each subject with its mark.

//  Task 7 – Nested Object
// Create an object student with nested details:
// {
//   name: "Kavi",
//   marks: { maths: 80, science: 90 }
// }

// Access and print the science mark.

// array sum fun

const arraySumFunction = (arr)=>{
let sum = 0;
for(let i=0 ; i<arr.length;i++){
    sum += arr[i]
}
return sum
}

console.log(arraySumFunction([34,56,7,2]))



