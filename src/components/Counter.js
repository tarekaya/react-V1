import React, { useState } from 'react';
import {useSelector} from 'react-redux';

export default function Counter() {
  const [count, setCount] = useState(0);
  // AVEC REDUX
  const countRedux = useSelector
  const handleMois = () => {
    setCount(count - 1);
  };
  const handlePlus = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleMois}>dec</button>
      {count}
      <button onClick={handlePlus}>inc</button>
    </div>
  );
}
