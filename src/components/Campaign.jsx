import React, { useRef, useState } from 'react';

export default function Campaign() {
  const [countState, setCountState] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const [render, setRender] = useState(true);

  const countUpState = () => {
    setCountState(countState + 1);
    console.log('State:', countState);
  };

  const countUpRef = () => {
    countRef.current += 1;
    console.log('Ref:', countRef);
  };

  const countUpVar = () => {
    countVar += 1;
  };

  const reRender = () => {
    setRender(!render);
  };
  return (
    <div>
      <h1>State: {countState}</h1>
      <h1>Ref : {countRef.current}</h1>
      <h1>Variable : {countVar}</h1>
      <button onClick={countUpState}>Start</button>
      <button onClick={countUpRef}>upref</button>
      <button onClick={countUpVar}>upvar</button>
      <button onClick={reRender}>rerend</button>
    </div>
  );
}
