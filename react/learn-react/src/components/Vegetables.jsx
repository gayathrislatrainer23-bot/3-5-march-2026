const Vegetables = ()=>{
    let vegetables =[
  {
    name: "carrot",
    color:"orange",
    price: 30
  },
  {
   name: "potato",
   color: "brown",
   price: 20
  }
]
    return(
        <div className="">
            <h1>Vegetables</h1>
            <ul>
                {
                    vegetables.map((veggi,i)=>(                    
                     <li key={i}>
                    <p>{veggi.name}</p>
                    <p>{veggi.color}</p>
                    <p>{veggi.price}</p>
                     </li>
                    ))
                }
            </ul>

        </div>
    )
}

 export default Vegetables