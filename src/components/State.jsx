import React from 'react'

export default function State() {

  let teacher = "이효석"
  
  function inEnglish() {
    const spanEl = document.querySelector("#text");
    spanEl.innerHTML = "tetz";

    // teacher = 'tetz';
    // console.log(teacher);
  }
  return (
    <div>
      <button onClick={()=>{
        inEnglish()
      }}>영어로</button>
      <br/>
      <span id="text">{teacher}</span>
    </div>
  )
}
