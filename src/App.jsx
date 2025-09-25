import React, { useEffect, useState,memo } from "react";
import { RecoilRoot , atom, useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import { counterAtom, evenSelector } from './store/atoms/counter'

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
    <RecoilRoot>
      <Buttons />
      <Counter />
      <IsEven />
    </RecoilRoot>
     
  )
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom)
  function increase(){
    setCount(c=>c+2);
  }
  function decrease(){
    setCount(c=>c-1);
  }
  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}
function Counter(){
  const count = useRecoilValue(counterAtom);
  return(
    <div>
      {count}
    </div>
  )
}
function IsEven(){
  const even =useRecoilValue(evenSelector);
  return <div>
    {even ? "Even" :"odd"}
  </div>
}
export default App