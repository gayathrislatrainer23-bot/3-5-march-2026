import AcUnitIcon from '@mui/icons-material/AcUnit';
const Tailwind = ()=>{
    return(
        <>
        {/* <div className=" flex justify-between items-center">
<div className="">box1</div>
<div className="">box2</div>
<div className="">box3</div>

        </div> */}
        <div className="grid grid-cols-2 gap-4 px-4  bg-sky-700 border-5 border-red-800">
    <div className="w-8  h-8 bg-amber-600  px-4 ">col1</div>
    <div className="w-8  bg-amber-600 ">col2</div>
    <div className="w-8  bg-amber-600 ">col3</div>
    <div className="w-8  bg-amber-600 ">col4</div>
</div>
<div className="w-8">
    <div class="shadow-md  bg-white w-6 h-6">hi</div>
<div class="shadow-lg w-6 h-6 ">h2</div>
<div class="shadow-xl w-6 h-6">h1</div> 
<div class="shadow-xl w-6 h-6">h1</div> 
</div>
        </>
    )
}

export default Tailwind