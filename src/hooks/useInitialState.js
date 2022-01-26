import React, { useState } from 'react';
import initialState from './../initialState';

function useInitialState() {
  const [state, setState] = useState(initialState);
  const [counter, setCounter] = useState(0);
  const addCounter = () => {
    setCounter(counter + 1);
    return counter;
  };
 

 

  return {
    addCounter,
     

    state,
  };
}

export default useInitialState;
