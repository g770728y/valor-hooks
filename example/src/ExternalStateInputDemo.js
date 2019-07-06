import React, {Component} from 'react';

import {useCompositionInput} from 'valor-hooks'

function ExternalStateInput({value, onChange}) {
  const compositionInputProps = useCompositionInput({value, onCommit: onChange});
  return <input type='text' {...compositionInputProps}/>
}

export class ExternalStateInputDemo extends Component {
  state = {value: '请输入'};

  onChange = (v) => {
    this.setState({value: v})
  };

  render() {
    console.log('value', this.state);
    const value = this.state.value;
    const onChange = this.onChange;
    return (
      <div>
        <div> 模拟hierarchy-editor那样, 将value提升到store管理的情形</div>
        <ExternalStateInput value={value} onChange={onChange}/>
        <div>这里接收的value, 一定不会是汉字输入的中间状态: <span style={{color: 'red'}}>{this.state.value}</span></div>
      </div>
    )
  }
}
