import React from 'react';
import { useState } from 'react';
import PracticeTimer from './PracticeTimer';

export default function PracticeTimerView() {
  const [show, setShow] = useState(false);
  return (
    <>
      {show && <PracticeTimer />}
      <button
        onClick={() => {
          setShow((cur) => !cur);
        }}
      >
        {show ? '숨기기' : '보이기'}
      </button>
    </>
  );
}
