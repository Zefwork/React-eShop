import React from 'react';
import CounterClass from './counters/class';
import CounterFunction from './counters/function';
import MinMaxFunction from './carts/minmax';
import MinMaxClass from './carts/minClass';
import InputClass from './inputs/input';
import InputChange from './inputs/onChange';

export default function() {
  return (
    <div>
      <h2>Counter as class</h2>
      <CounterClass />
      <h2>Counter as function</h2>
      <CounterFunction />
      <h2>Min-Max value as function</h2>
      <MinMaxFunction min={2} max={10} />
      <h2>Min-Max value as class</h2>
      <MinMaxClass min={0} max={10} />
      <h2>Min-Max value as class input</h2>
      <InputClass min={0} max={10} />
      <h2>Min-Max value as input change</h2>
      <InputChange min={20} max={50} />
    </div>
  );
}