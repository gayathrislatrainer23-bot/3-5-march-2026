import { useEffect, useState } from "react"

const Profile = ()=>{
    const [user, setUser] = useState(null)

useEffect(()=>{
   const fetchUser = async ()=>{

         const res= await fetch('https://jsonplaceholder.typicode.com/users/1')
        //  console.log('res',res)
         let data = await res.json()
          console.log('data',data)
                 setUser(data)
          console.log("user", user)
   } 

   fetchUser()
},[])
    return(
        <div className="">
<h1>Profile Page</h1>
{
    user  ?
     <>
<p>name  {user.name}</p>
<p>email  {user.email}</p>
    </>
    :
    <>
    <p>Loading</p>
    </>
}
        </div>
    )
}

export default Profile;