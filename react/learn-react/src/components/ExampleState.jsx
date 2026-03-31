import { useState } from "react";

const ExampleState = ()=>{
let [age,setAge]=useState(30)
let [msg,setMsg]=useState('this is a state example page')

const handleClick = ()=>{
// console.log(event)
    setAge(45)
    setMsg('yes msg can also update')

}

    return(
        <div className="">
            <p>age : {age}</p>
            <p>msg : {msg}</p>
    <button  onClick={handleClick}>Age update</button>
        </div>
    )
}

export default ExampleState;