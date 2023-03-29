import React, { useRef, useState } from 'react';

export default function ExNumber() {
  const inputEl = useRef();
  const [again, setAgain] = useState(true);

  const Num1 = Math.floor(Math.random() * 9);
  const Num2 = Math.floor(Math.random() * 9);
  const ranOpe = Math.floor(Math.random() * 2);
  const ope = ['x', '+', '-'];

  const func = () => {
    if (ranOpe == 0) {
      return Num1 * Num2;
    } else if (ranOpe == 1) {
      return Num1 + Num2;
    } else {
      return Num1 - Num2;
    }
  };

  const confirm = () => {
    const result = func();

    if (Number(inputEl.current.value) === result) {
      alert('정답');
      setAgain(!again);
      // setTimeout('location.reload()', 1);
    } else alert('틀림 다시입력');
    inputEl.current.value = '';
    inputEl.current.focus();
  };

  return (
    <div>
      <h1>
        {Num1}
        {ope[ranOpe]}
        {Num2}
      </h1>
      <input ref={inputEl} />
      <br />
      <button onClick={confirm}>정답제출</button>
    </div>
  );
}
