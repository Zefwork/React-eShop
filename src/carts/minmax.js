import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function CounterFunction(props) {  
  const {min, max} = props;
  const [cnt, setCnt] = useState(min);

  const decrease = () => {
    setCnt(set(cnt - 1));
  }

  const increase = () => {
    setCnt(set(cnt + 1));
  }

  let set = function(newCnt) {
    console.log("TCL: set -> newCnt", newCnt)
    let cnt = Math.min(Math.max(newCnt, min), max);
    return cnt;
  }

  return (
    <div>
      <button onClick={decrease}>Minus 1</button>
      <strong>{cnt}</strong>
      <button onClick={increase}>Plus 1</button>
    </div>
  )
}

CounterFunction.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  }