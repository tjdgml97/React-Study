import React, { useEffect, useRef, useState } from 'react';

export default function TestUseEffect() {
  const [count, setcount] = useState(0);
  const [text, setText] = useState('입력하세요');
  // 리렌더 x ,
  const inputValue = useRef();

  // 버튼 클릭 -
  const onBtnClick = () => {
    console.log('\n🖱 버튼 클릭');
    setcount((cur) => cur + 1);
  };

  const onInputChange = () => {
    console.log('💻 키 입력');
    setText(inputValue.current.value);
  };

  console.log('🎨 렌더링 할 때마다 실행되는 useEffect');

  // 처음 렌더링 // 리렌더 될때마다 실행
  // useEffect(function () {
  //   console.log('🎨 렌더링 할 때마다 실행되는 useEffect');
  // });

  useEffect(() => {
    console.log('!!🕹 버튼 클릭시에만 실행되는 useEffect');
  }, [count]);

  useEffect(() => {
    console.log('!!텍스트 추가시 실행되는 useEffect');
  }, [text]);

  useEffect(() => {
    console.log('최초');
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onBtnClick}>+1 버튼</button>
      <br />
      <br />
      <h1>{text}</h1>
      <input ref={inputValue} type="text" onChange={onInputChange} />
    </>
  );
}
