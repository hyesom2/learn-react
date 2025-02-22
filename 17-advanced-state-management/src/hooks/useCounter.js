import { useState } from 'react';

function useCounter({
  count: initialCount = 0,
  step = 1,
  min = 0,
  max = 100,
} = {}) {
  const [count, setCount] = useState(initialCount);

  const isMinDisabled = count <= min;
  const isMaxDisabled = count >= max;

  const reset = () => setCount(initialCount);

  const increment = () =>
    setCount((c) => {
      let nextCount = c + step;
      if (nextCount >= max) nextCount = max;
      return nextCount;
    });

  const decrement = () =>
    setCount((c) => {
      let nextCount = c - step;
      if (nextCount <= min) nextCount = min;
      return nextCount;
    });

  return {
    count,
    step,
    isMinDisabled,
    isMaxDisabled,
    increment,
    decrement,
    reset,
  };
}

export default useCounter;
