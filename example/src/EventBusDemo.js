import React from 'react';
import { useEventBus } from 'valor-hooks';

const A = () => {
  const { addEventListener, removeEventListener } = useEventBus();
  console.log('a', addEventListener, removeEventListener);
  const listener = React.useRef(params => {
    console.log('A x-event params', params);
  });
  const addListener = React.useCallback(() => {
    addEventListener('x-event', listener.current);
  });
  const removeListener = React.useCallback(() => {
    removeEventListener('x-event', listener.current);
  });
  return (
    <div>
      <h2>A</h2>
      <button onClick={addListener}>add Listener</button>
      <button onClick={removeListener}>remove Listener</button>
    </div>
  );
};

const B = () => {
  const { addEventListener, removeEventListener } = useEventBus();
  const listener = React.useRef(params => {
    console.log('B x-event params', params);
  });
  const addListener = React.useCallback(() => {
    addEventListener('x-event', listener.current);
  });
  const removeListener = React.useCallback(() => {
    removeEventListener('x-event', listener.current);
  });
  return (
    <div>
      <h2>B</h2>
      <button onClick={addListener}>add Listener</button>
      <button onClick={removeListener}>remove Listener</button>
    </div>
  );
};

const C = () => {
  const { dispatchEvent } = useEventBus();
  const onClick = () => dispatchEvent('x-event', { a: 1 });
  return <div onClick={onClick}>click to dispatch Event</div>;
};

export default () => (
  <div>
    <div>useEventBus并不是一个真正的hooks, 只是借用了use的表现样式</div>
    <div>
      它的subscribes是全局的, 所以你完全可以在不同的组件中随便 add , remove,
      dispatch{' '}
    </div>
    <div>如下:</div>
    <A />
    <B />
    <C />
    <div>
      如果你想控制在某一个范围内, 那么: 1.直接使用 EventBus,
      然后用Context存取即可
      <br />
      或(推荐): 使用 useEventBus(namespace), 比如Editor范围内使用 dispatchEvent
      = useEventBus('Editor');
    </div>
  </div>
);
