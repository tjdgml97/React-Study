import React, { useEffect, useMemo, useState } from 'react';

export default function UsingUseMemo() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = useMemo(() => {
    return {
      where: isKorea ? '한국' : '외국',
    };
  }, [isKorea]);

  useEffect(() => {
    console.log('');
  }, [location]);
  //  iskorea 가 바뀔때

  return (
    <>
      <h1>숫자증감</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber((cur) => parseInt(e.target.value))}
      />
      <br />
      <h1>where are you?</h1>
      <h2>위치 : {location.where}</h2>
      <button onClick={() => setIsKorea(!isKorea)}>나라변경</button>
    </>
  );
}
