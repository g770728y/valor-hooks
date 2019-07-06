# valor-hooks

> 工作中自己写的hooks

## Install

```bash
npm install --save valor-hooks
```

## Usage
### useCompositionInput
#### 用例1: 实时搜索
常规方案问题: 中文未输完时, 会匹配错误结果
参见: example/src/SearchInputDemo.js
#### 用例2: 状态提升时, 希望中文输入完成, 再更新store
(比如store.text被两处引用, 改一处时另一处会同步变化, 这时显然不愿意看到输入一半的情况)


## License

MIT © [g770728y](https://github.com/g770728y)
