import React, { useState } from 'react'

export default function State2() {

  let [strState, setStrState] = useState(1);

  function changeState() {
    strState += '-';
    console.log(strState);
  }

  function customSetStrState() {
    setStrState('변경됨');
  }
  
  return (
    <div>
      <button onClick={
        setStrState(strState+1)
      }>리랜더링 반복! </button>

      <button onClick={()=>{
        changeState()
      }}>리랜더링 반복2! </button>

      <button onClick={customSetStrState}>커스텀 함수</button>


      <span>{strState}</span>
    </div>
  )
}
