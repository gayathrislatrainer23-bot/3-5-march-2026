import { Link } from "react-router-dom"

const Navbar = ()=>{
    return(
        <div className="">
<Link to={'/login'}>Login</Link>
<Link to={'/Profile'}>Profile</Link>
        </div>
    )
}

export default Navbar