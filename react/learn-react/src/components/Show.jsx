import { useEffect, useState } from "react";

const Show = ()=>{
let [show, setShow] = useState(false)

    return(
        <div className="">

<button onClick={()=>setShow(!show)}>{show ? "HIDE" : 'SHOW'}</button>

{
    show && <p>message</p>
}
        </div>
    )
}

export default Show;
