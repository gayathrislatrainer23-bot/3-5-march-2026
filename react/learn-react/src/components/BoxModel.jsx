import Child from "./Child"

const BoxModel = ({num})=>{
   let  isLoggedIn = true
    let arr = [2,5,7]
    let object = {
        userName: "manu",
        age: 45,

    }
// console.log("props",props)
// console.log("props num",props.num)

    return(
        <div className="">
        <p>this is a box model</p>
        {/* <p>{props.num}</p> */}
        {/* <p>{num}</p> */}
        <Child  number ={num} arr ={arr} object={object}/>
        </div>
    )
}
export default BoxModel