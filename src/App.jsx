import React, { useEffect, useState,memo } from "react";
import { RecoilRoot , atom, useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import { counterAtom } from './store/atoms/counter'

// function App() {

//   return (
//     <RecoilRoot>
//      <Counter />
//     </RecoilRoot>
//   )
// }

// function Counter() {

//   return <div>
//     <CurrentCount />
//     <Increase />
//     <Decrease />
//   </div>
// }

// function CurrentCount() {
//   const count = useRecoilValue(counterAtom);
//   return <div>
//     {count}
//   </div>
// }

// function Decrease() {

//   const setCount = useSetRecoilState(counterAtom);

//   function decrease() {
//     setCount(c => c - 1);
//   }

//   return <div>
//     <button onClick={decrease}>Decrease</button>
//   </div>
// }


// function Increase() {
//   const setCount = useSetRecoilState(counterAtom);

//   function increase() {
//     setCount(c => c + 1);
//   }

//   return <div>
//     <button onClick={increase}>Increase</button>
//   </div>
// }

// export default App

function App() {

  return (
     <Counter />
  )
}

function Counter() {
  const [count,setCount]=useState(0);
  useEffect(() => {
    setInterval(()=>{
      setCount(c => c+1)
    },3000)
  },[]);
  return <div>
    <CurrentCount />
    <Increase />
    <Decrease />
  </div>
}
const CurrentCount =memo(function() {
  return <div>
    1
  </div>
})

const Decrease= memo(function() {

  

  function decrease() {
  }

  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
})


const Increase= memo(function() {
  

  function increase() {
  }

  return <div>
    <button onClick={increase}>Increase</button>
  </div>
})

export default App