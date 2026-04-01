import { useEffect, useState } from "react";

const Profile = ()=>{
     const[name,setName] = useState('Manu')
     const[msg,setMsg] = useState('hello')
    //  case 1

    useEffect(()=>{
        console.log(' sideeffect work every render')
    })


    //     //  case 2

    //      useEffect(()=>{
    //     console.log(' sideeffect work initial render only')
    // },[])  
    // // empty dependancy array

     
    //     //  case 3
    //            useEffect(()=>{
    //     console.log(' sideeffect work initial render and state change')
    // },[name])  

    return(
        <div className="">

  {name}
  {msg}
  <button onClick={()=>setName("Vinu")}>Name change</button>
  <button onClick={()=>setMsg("Hai")}>msg change</button>
        </div>
    )
}

export default Profile;
