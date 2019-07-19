import React from 'react';
import { useCompositionInput } from 'valor-hooks';

export const SearchInputDemo = () => {
  const compositionInputProps = useCompositionInput({
    defaultValue: '初始内容',
    onCommit: v => console.log('searching...', v)
  });

  return (
    <div>
      <div>模拟实时搜索输入框, 注意只有当汉字输入完后, 才会向后台发请求</div>
      <div>汉字全部输入完后, 才会进入search</div>
      <input {...compositionInputProps} />
    </div>
  );
};
