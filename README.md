# valor-hooks

> 工作中自己写的 hooks

## Install

```bash
npm install --save valor-hooks
```

## Usage

### useCompositionInput

#### 用例 1: 实时搜索

想解决的问题: 在搜索框中, 中文"张", 先输入"zh", 会匹配`zh`的搜索, 直到输入完成才匹配到`张`的输入
也就是: 敲中文到一半时, 会搜索不需要的结果
参见: example/src/SearchInputDemo.js

#### 用例 2: 状态提升时, 希望中文输入完成, 再更新 store

(比如 store.text 被两处引用, 改一处时另一处会同步变化, 这时显然不愿意看到输入一半的情况)

### useEventBus

想解决的问题:\
TODO: 这一段写得非常含糊!!!

1. 属性多级下传: 需要在`Editor`组件中, 接收`onFocus`属性, 然而将此属性下传到 `input` 组件
2. 事件响应零散在各个组件中: 在`App`组件, 接收到某事件, 在`Editor`等组件中进行响应
   虽然也可以通过`context`实现, 但感觉`context`还是以数据为中心.
   想想一个`context`的结构是: {onFocus, onClick...}, 会非常奇怪.

目前`useEventBus`是维护的全局`subscribes`, 所以你可以随便在不同的组件中使用\
如果希望不同的范围使用不同的`eventBus`, 简单地使用`useEventBus('namespace')`模式即可

## License

MIT © [g770728y](https://github.com/g770728y)
