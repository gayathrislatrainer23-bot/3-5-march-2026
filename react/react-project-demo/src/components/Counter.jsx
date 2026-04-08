import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/counterSlice";

const Counter  = ()=>{
const count = useSelector((state)=> state.counter.value );
           const dispatch = useDispatch()
    return(
        <div className="">
<button onClick={()=> dispatch(increment())} >+</button>
       {count}
<button onClick={()=> dispatch(decrement())}>-</button>
<button onClick={()=> dispatch(reset())}>reset</button>
        </div>
    )
}

 export default Counter;