const Login = ()=>{
let loggedIn = false
    return(
        <div className="">
<h1>Login</h1>
<button>{loggedIn ?  <h1> Logout</h1>  :<h1>Login</h1>}</button>

        </div>
    )
}

export default Login;
