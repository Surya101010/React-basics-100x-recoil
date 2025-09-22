import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setCount] = useState(0);
  return (<>
  {count}
  <Increase setCount={setCount}/>
  <Decrease setCount={setCount}/>
  </>
  )
}

function Decrease({setCount}){
  function decrease(){
    setCount(count =>count-1)
  }
  return(<>
    <button onClick={decrease}>Decrease</button>
  </>)
}
function Increase({setCount}){
  function increase(){
    setCount(count =>count+1)
  }
  return(<>
    <button onClick={increase}>Increase</button>
  </>)
}
export default App
