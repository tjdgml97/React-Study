import React, { useState } from 'react'


export default function State() {

  const [teacher, setTeacher ] = useState("이효석");

  return (
    <div>
      <button onClick={()=>{setTeacher("tetz")}}>영어로</button>
      <br/>
      <span id="text">{teacher}</span>
    </div>
  )
}
