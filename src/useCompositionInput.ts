import * as React from 'react';

const isChrome = !!(window as any).chrome;

export interface UseCompositionInputResult  {
  value: string;
  onChange: React.ChangeEventHandler;
  onCompositionStart: React.CompositionEventHandler;
  onCompositionEnd: React.CompositionEventHandler;
}

export function useCompositionInput({
  defaultValue,
  value,
  onCommit
}: {
  defaultValue?: string;
  value?: string;
  onCommit: (v: string) => void;
}): UseCompositionInputResult {
  const [inner_value, setInnerValue] = React.useState(defaultValue || value || '');
  const isOnComposition = React.useRef<boolean>(false);

  React.useEffect(() => {
    (defaultValue===undefined || defaultValue == null ) && setInnerValue(value || '');
  }, [value]);

  const onChange = (e: any) => {
    const newValue = e.target.value;
    setInnerValue(newValue);
    if (!isOnComposition.current) {
      onCommit(newValue);
    }
  };

  const onComposition = (e: any) => {
    if (e.type.toLowerCase() === 'compositionend') {
      isOnComposition.current = false;

      if (isChrome) {
        // chrome53 开始, onchange先于 compositionend 执行, 无法得到最终的value, 所以这里多执行一次
        onChange(e);
      }
    } else {
      isOnComposition.current = true;
    }
  };

  return {value:inner_value, onChange, onCompositionStart:onComposition, onCompositionEnd:onComposition};
}
