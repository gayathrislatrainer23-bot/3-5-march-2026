import { useEffect, useState } from "react"
import Child from "../components/Child"
// import AcUnitIcon from '@mui/icons-material/AcUnit';

const Home = ()=>{
    const [show,setShow] = useState(false)
    useEffect(()=>{
console.log("home updated")
    },[show])
    return(
        <div className="">
{/* Home */}
{/* <AcUnitIcon/> */}
<button onClick={()=>setShow(!show)}>{show ? " hide" : "show"}</button>
{
    show && <Child/>
}

        </div>
    )
}

export default Home