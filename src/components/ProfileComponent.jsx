import React from 'react';

export default function ProfileComponent({ name, age, nick }) {
  return (
    <div>
      <h1>이름: {name}</h1>
      <h2>나이 : {age}</h2>
      <h2>별명 : {nick}</h2>
      <hr />
    </div>
  );
}
