import { Link } from "react-router-dom"

const Navbar = ()=>{
    return(
        <div className="">
<Link to={'/login'}>Login</Link>
<Link to={'/Profile'}>Profile</Link>
<Link to={'/Profile1'}>Profile1</Link>
        </div>
    )
}

export default Navbar