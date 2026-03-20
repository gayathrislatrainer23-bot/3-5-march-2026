// Async in js
// 1. callback
//  2. Async await
    // 3. promise


    // function p1 (P2){
    //     P2(p3){
    //         p3(4){

    //         }
    //     }
    // }
// console.log('HI')
//        function child(){
// console.log("print first second")
//      }

//     async function  parent (){
//         try {

//             console.log('print first')
//            await child()
//         }catch(err){

//         }
   
//     }

//    parent()

// pending
// resolve  
// reject   

let p = new Promise((resolve, reject)=>{
//     console.log('pending')
// let sucess = false;
// if(sucess){
//     resolve(" Task completed")
// }else{
//     reject('failed')
// }
})

p.then((data)=>{
console.log(data)
})
.catch((err)=>{
    console.log(err);
    
})


function checkEvenNumber (number){
    return new Promise((resolve,reject)=>{
if(number%2===0){
    resolve("number is event")
}else {
    reject("error")
}
    })
}

checkEvenNumber(5).then((msg)=> console.log(msg))
                   .catch((err)=> console.log(err))


 function orderFood(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('food delivered')
        }, 3000)
    })
 }


  async function getFood (){
    console.log('ordering food...')
    let result = await  orderFood()  
    // waiting
     
    console.log(result)
    console.log('end')
 }

 console.log(' waiting')

 getFood()

 let id =setInterval(()=>{
    let num= 1
    console.log(' print me')
    num =0
    if(num<1){

        clearInterval(id)
    }
 },2000)

//   count down  10 to 0

let count =10
let countDown = setInterval(()=>{
    console.log(count)
count--;
if(count< 0){
    clearInterval(countDown)
}
}, 2000)




