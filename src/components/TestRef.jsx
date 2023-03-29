import React, { useRef, useState } from 'react';

export default function TestRef() {
  const [text, setText] = useState('안녕하세요! ');

  const inputValue = useRef();

  const onChangeText = (e) => {
    const inputText = e.target.value;
    setText(inputText);
  };

  const onChangeRef = () => {
    console.log(inputValue.current.value);
    setText(inputValue.current.value);
  };

  return (
    <div>
      <h1>{text}</h1>
      <input
        ref={inputValue}
        onChange={(e) => {
          onChangeRef(e);
        }}
      />
    </div>
  );
}
