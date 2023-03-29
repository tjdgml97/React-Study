import React, { useRef } from 'react';

export default function ColorTest() {
  const backEl = useRef();
  const inputEl = useRef();

  const convert = () => {
    const color = inputEl.current.value;
    backEl.current.style.backgroundColor = color;
  };

  return (
    <div>
      <div ref={backEl}>
        <input ref={inputEl} type="text" />
        <br />
        <button onClick={convert}>색 적용</button>
      </div>
    </div>
  );
}
