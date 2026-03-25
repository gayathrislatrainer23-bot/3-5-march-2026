const Child = ({number,arr,object})=>{
    return(
        <div className="">
<p>child</p>
<h1>{number}</h1>
<h2>{arr}</h2>
<h2>{object.userName}</h2>
<h2>{object.age}</h2>
        </div>
    )
}
 export default Child;
