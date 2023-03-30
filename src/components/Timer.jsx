import React from 'react';
import { useEffect } from 'react';

export default function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 실행중');
    }, 1000);

    return () => {
      console.log('컴포넌트 언마운트, 타이머가 종료됩니다!');
      clearInterval(timer);
    };
  }, []);

  return <div>타이머 실행중 </div>;
}
