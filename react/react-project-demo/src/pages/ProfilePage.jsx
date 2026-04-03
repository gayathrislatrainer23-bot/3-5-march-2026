const ProfilePage = ()=>{
   let user={
name:'Manu',
email:'manu@gmail.com',
password:"xfgzfsdg",
img: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"

    }
    return(
        <div className="">
<img src={user.img} alt="image" width={50} height={50} />
<p><b>Name:</b>{user.name}</p>
<p><b>email:</b>{user.email}</p>
<p type='password'><b>password:</b> {user.password}</p>

        </div>
    )
}

export default ProfilePage