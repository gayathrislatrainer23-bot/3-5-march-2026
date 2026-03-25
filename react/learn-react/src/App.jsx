import './App.css'
import BoxModel from './components/BoxModel'
import ShowName from './components/ShowName'

function App() {
let number = 100
let name = 'Manu'
  return (
<div className="d" style={{background: "green"}} >
  {/* <p  style={{color:"red"}}>{number}</p>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br></br> Et quaerat dicta cupiditate. Beatae cum ut vero. Dignissimos vero, mollitia beatae rem deleniti eveniet, eos alias possimus distinctio architecto voluptate rerum?</p>
  <p>hii </p>
<h1>h1 tag</h1>
<h2>h2 tag</h2>
<h3>h3 tag</h3>
<h4>h4 tag</h4>
<h5>h5 tag</h5>
<h6>h6 tag</h6> */}
<BoxModel num = {number}/>
<ShowName userName= {name}/>

</div>
  )
}

export default App
