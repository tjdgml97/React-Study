import React, { useEffect, useState } from 'react';
import ProfileComponent from './ProfileComponent';

export default function UseEffectFetch() {
  const [dataArr, setDataArr] = useState([]);

  async function fetchData() {
    const resFetch = await fetch('http://localhost:4000/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });

    const data = await resFetch.json();
    setDataArr(data);
    console.log(dataArr);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {dataArr.map((el) => {
        return (
          <ProfileComponent
            name={el.name}
            age={el.age}
            nick={el.nick}
            key={el.name}
          />
        );
      })}
    </div>
  );
}
