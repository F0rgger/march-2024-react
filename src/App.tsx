
import React, { useState } from 'react';
import useToggle from './hooks/useToggle';
import usePrevious from './hooks/usePrevious';

const ExampleComponent: React.FC = () => {
  const [isToggled, toggle] = useToggle();
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
      <div>
        <button onClick={toggle}>
          {isToggled ? 'ON' : 'OFF'}
        </button>
        <div>
          <p>Current Count: {count}</p>
          <p>Previous Count: {prevCount}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      </div>
  );
};

export default ExampleComponent;
