

// 在React数据流中，父子组件唯一的交流方式是通过props属性；如果要修改子组件，
// 通过修改父组件的属性，更新达到子组件props属性的值，重新渲染组件以达到视图的更新。
// 但是，有些场景需要获取某一个真实的DOM元素来交互，比如文本框的聚焦、触发强制动画等。



// 1、给DOM元素添加ref属性

// 首先在React中可以给任意组件添加特殊属性。如：ref；
// 给html元素添加ref属性，该属性接收一个回调函数，而该回调接收底层当前的DOM元素作为回调参数。
// 所以我们就可以将参数（DOM元素）添加到组件实例的自定义属性中。



import React from "react";

class Foo extends React.Component {
    constructor(props) {
        super(props);
        this.handle = this.handle.bind(this);
    }

    render() {
        return <div>
            <input ref={el => {this.eleInput = el}}/>
            {/*// el 指向当前DOM元素（input）*/}
            <button onClick = {this.handle}>聚焦</button>
        </div>
    }

    handle() {
        this.eleInput.focus();
    }
}
export default Foo





// Foo组件在加载时，将DOM元素传入ref的回调参数中，然后将其赋值给组件实例的自定义属性eleInput。
// 在组件卸载时，会传入null。ref回调会在componentDidMount和 componentWillUpdate 生命周期之前执行
