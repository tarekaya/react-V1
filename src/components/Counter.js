import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DECREMENT, INCREMENT } from '../redux/actions/types';

export default function Counter() {
  // const [count, setCount] = useState(0);
  //using redux
  // on utilise useSelector pour acceder au state
  //useDispatch pour faire des MODIFICATION au state

  // on peut ecrire const count = useSelector((state) => state.count);
  //par distruction const { count } = useSelector((state) => state);
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleMoin = () => {
    //sans redux on utilise le hook useState()
    // setCount(count - 1);
    dispatch({
      type: DECREMENT,
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
