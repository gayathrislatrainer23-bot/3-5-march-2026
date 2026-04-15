import { useEffect } from "react"

const Child  = ()=>{
    useEffect(()=>{
   console.log("child created or mount")
   return ()=>{
    console.log('child unmount')
   }
    },[])
    return(
        <div className="">
            <p>I am Here</p>
        </div>
    )

}

export default Child