import { useState } from 'react'
import './loginPage.css'
import { useNavigate } from 'react-router-dom'
const LoginPage = ()=>{
   let [email,setEmail]  = useState('')
   let [password,setPassword]  = useState('')
       let navigate  = useNavigate()
const handleSubmit = async (e)=>{
   e.preventDefault()
   try{
       let res = await fetch('https://jsonplaceholder.typicode.com/posts', {email,password})
       console.log(res , 'res')
     
       if(res.status === 200){
//    alert('login success', email)
navigate('/profile')

       }  else{
       navigate('/')
       }
     
   }catch(err){
  console.log(err.message)
   }

}
    return(
        <div className="container">
<form onSubmit={handleSubmit}>
    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="email" />
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="password" />
  
    <button type="submit">Login</button>

</form>
        </div>
    )
}

export default LoginPage