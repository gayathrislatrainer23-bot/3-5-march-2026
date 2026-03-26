import Card from "./Card"

function Parent(){
// home 
let homeDetails = {
    heading1 : "This is home card",
    para  : "this is paragraph in home"
}
    return(
        <div className="">
<Card details={homeDetails}/>
        </div>
    )
}

 export default Parent