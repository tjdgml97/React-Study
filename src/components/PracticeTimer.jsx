import React, { useEffect, useRef, useState } from 'react';

export default function PracticeTimer() {
  const [render, setRender] = useState(false);
  const time = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      time.current += 1;
      console.log(time.current);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('타이머 종료');
    };
  }, []);
  // 렌더 x, 값 유지 하는것 - useRef 사용해야함
  return (
    <>
      <h1>{time.current}</h1>
      <button
        onClick={() => {
          // 리랜더링 시킴 usestate 값 바꿈
          setRender((cur) => !cur);
        }}
      ></button>
    </>
  );
  // let [mountTime, setMountTime] = useState(0);
  // // let mountTime = 0;
  // useEffect(() => {
  //   const time = setInterval(() => {
  //     setMountTime((mountTime += 1));
  //     console.log(mountTime);
  //     console.log('시간');
  //   }, 1000);
  //   return () => {
  //     clearInterval(time);
  //   };
  // }, []);
  // return (
  //   <>
  //     <h1>{mountTime}</h1>
  //     <button>시간</button>
  //     <button>숨기기</button>
  //   </>
  // );
}
