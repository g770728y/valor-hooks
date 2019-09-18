import React from 'react';
import { useMemorizedValue } from 'valor-hooks';

export const MemorizedValueDemo = () => {
  const [state, setState] = React.useState({ a: 1 });

  const memorizedState = useMemorizedValue(state);

  React.useEffect(() => {
    console.log('memorized state changed');
  }, [memorizedState]);

  React.useEffect(() => {
    console.log('state changed');
  }, [state]);

  return (
    <div>
      <button onClick={() => setState({ a: 1 })}>{'{a:1}'}</button>
      <button onClick={() => setState({ a: 2 })}>{'{a:2}'}</button>
    </div>
  );
};
