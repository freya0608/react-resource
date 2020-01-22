

// 有些情况下，我们需要从父组件中访问子组件中的某一个DOM节点。
// 可以通过在组件上添加自定义属性，传递一个回调给子组件。
// 而且这种方式适用于函数式组件和class组件。


import React from "react";
function Foo(props) {
    console.log(props);
    return <div>
        <input type="text" ref = {props.inputEle}/>
    </div>
}

class Fn extends React.Component {
    constructor(props) {
        super(props);
        this.handle = this.handle.bind(this);
    }
    render() {
        return <div>
            <Foo inputEle = {el => {this.eleInput = el; console.log(el)}}/>
            {/*// el为子组件上对应的DOM节点*/}
            <button onClick = {this.handle}>聚焦</button>
        </div>
    }

    handle() {
        this.eleInput.focus();
    }
}
export default Fn

// 注意点：
// inputEle属性没有特殊含义，就是一般属性名。
// 回调使用箭头函数。因为此时的this的指向的是Foo组件实例。
// 如果使用普通函数，在需要将this保存在一个变量中。
