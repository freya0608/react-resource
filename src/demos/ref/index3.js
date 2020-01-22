

// 在React数据流中，父子组件唯一的交流方式是通过props属性；如果要修改子组件，
// 通过修改父组件的属性，更新达到子组件props属性的值，重新渲染组件以达到视图的更新。
// 但是，有些场景需要获取某一个真实的DOM元素来交互，比如文本框的聚焦、触发强制动画等。


import React from "react";
// function Foo() {
//     return <div>
//         <input type="text"/>
//     </div>
// }
//
// class Fn extends React.Component {
//     render() {
//         // ref 是无效的，并且会报错
//         return <Foo ref = {el => {this.componEle = el}}/>
//     }
// }
// export default Fn


// ref属性不能用在函数式声明的组件上，因为函数声明的组件没有实例。

//如果要使用ref获取组件实例，需要转换成class声明的组件。

//但是可以在函数式声明的组件内部使用ref属性。如下：

function Foo() {
    let eleInput = null;
    function handle() {
        console.log('666',eleInput);
        eleInput.focus();
    }
    return <div>
        <input type="text" ref={el => eleInput = el}/>
        <button onClick = {handle}>聚焦</button>
    </div>
}
class Fn extends React.Component {
    render() {
        return <Foo/>
    }
}
export default Fn
