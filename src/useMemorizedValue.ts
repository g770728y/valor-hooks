import * as React from 'react';
import * as R from 'rambda';

export function useMemorizedValue<T>(value: T): T {
  const memo = React.useRef<T>(value);
  if (R.equals(memo.current, value)) {
    return memo.current;
  } else {
    memo.current = value;
    return memo.current;
  }
}
