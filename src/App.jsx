import { useState } from 'react'
import { RecoilRoot , atom} from 'recoil'

function App() {
  
  return (<RecoilRoot>
    <Counter  />
  </RecoilRoot>
  )
}

function Counter(){
  const [count,setCount] = useState(0);
  return(<>
  {count}
  <Increase setCount={setCount}/>
  <Decrease setCount={setCount}/>
  </>)
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
