import React, { useRef } from 'react';

export default function RefDomControl() {
  const orangeEl = useRef();
  const skyblueEl = useRef();
  const inputEl = useRef();

  const adjustCSS = () => {
    orangeEl.current.style.backgroundColor = 'orange';
    skyblueEl.current.style.backgroundColor = 'skyblue';
  };

  const clearInput = () => {
    inputEl.current.value = '';
  };

  return (
    <div>
      <h1 ref={orangeEl}>오렌지</h1>
      <h1 ref={skyblueEl}>하늘색</h1>
      <input ref={inputEl} type="text" />
      <br />
      <button onClick={adjustCSS}>CSS적용</button>
      <button onClick={clearInput}>인풋초기화</button>
    </div>
  );
}
