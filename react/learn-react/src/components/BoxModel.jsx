import Card from "./Card"
import Child from "./Child"

const BoxModel = ({num})=>{
   let  isLoggedIn = true
    let arr = [2,5,7]
    let object = {
        userName: "manu",
        age: 45,

    }
    let boxDetails = {
    heading1 : "This is  Box",
    para  : "this is paragraph in Box"
}
// console.log("props",props)
// console.log("props num",props.num)

    return(
        <div className="">
        <p>this is a box model</p>
        {/* <p>{props.num}</p> */}
        {/* <p>{num}</p> */}
        <Child  number ={num} arr ={arr} object={object} isLoggedIn ={isLoggedIn}/>
        <Card details = {boxDetails}/>
        </div>
    )
}
export default BoxModel