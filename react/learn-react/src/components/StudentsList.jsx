
const StudentList = ()=>{
    let students = ['Alice','Bob', 'Manu','Balu']

    return(
        <div className="">
  
       <ul>
 {
    students.map((student,index)=>(

        <li key={index}>{student}</li>
        // <p key={index}>{student}</p>
    )

    )
 }

       </ul>
        </div>
    )
}

export default StudentList;