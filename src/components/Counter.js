import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Counter() {
  const [count, setCount] = useState(0);
  //using redux
  // on utilise useSelector pour acceder au state
  //useDispatch pour faire des MODIFICATION au state
  const countRedux = useSelector((state) => state.count);
  const dispatch = useDispatch();
  
  const handleMoin = () => {
    //sans redux on utilise le hook useState()
    // setCount(count - 1);
    dispatch({
      type: DESCREMENT,
    });
  };
  const handlePlus = () => {
    //sans redux on utilise le hook useState()
    // setCount(count + 1);
    dispatch({
      type: INCREMENT,
    });
  };
  return (
    <div>
      <button onClick={handleMoin}>dec</button>
      {count}
      <button onClick={handlePlus}>inc</button>
    </div>
  );
}
