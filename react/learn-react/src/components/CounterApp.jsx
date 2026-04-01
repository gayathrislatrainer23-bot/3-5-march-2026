import { useEffect, useState } from "react"

// CounterApp
function CounterApp() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log('count changed')
    },[count])
    return (
        <div className="" style={{ width: 50 }}>
            <button onClick={()=>setCount(count+1)}>+</button>
            <br />
            {count}
            <br />
            <button onClick={()=>setCount(count-1)}>-</button>
            <button onClick={()=>setCount(0)}>reset</button>
        </div>
    )
}

export default CounterApp