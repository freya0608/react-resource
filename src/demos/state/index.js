//
// React中constructor是唯一可以初始化state的地方，也可以把它理解成一个钩子函数，该函数最先执行且只执行一次。
// 更新状态不要直接修改this.state。虽然状态可以改变，但不会触发组件的更新。
// 应当使用this.setState()，该方法接收两种参数：对象或函数。
// 对象：即想要修改的state
// 函数：接收两个函数，第一个函数接受两个参数，第一个是当前state，
// 第二个是当前props，该函数返回一个对象，和直接传递对象参数是一样的，就是要修改的state；第二个函数参数是state改变后触发的回调。

// 要探究setState为什么可能是异步的，先了解setState执行后会发生什么？
// 事实上setState内部执行过程是很复杂的，大致过程包括更新state，创建新的VNode，再经过diff算法比对差异，
// 决定渲染哪一部分以及怎么渲染，最终形成最新的UI。这一过程包含组件的四个生命周期函数。
//
// shouleComponentUpdate
// componentWillUpdate
// render
// componentDidUpdate
// 需要注意的是如果子组件的数据依赖于父组件，还会执行一个钩子函数componentWillReceiveProps。
// 假如setState是同步更新的，每更新一次，这个过程都要完整执行一次，无疑会造成性能问题。事实上这些生命周期为纯函数，
// 对性能还好，但是diff比较、更新DOM总消耗时间和性能吧。
// 此外为了批次和效能，多个setState有可能在执行过程中还会被合并，所以setState延时异步更新是很合理的。
import React from "react";
class Foo extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            count:10
        }
    }
    componentDidMount() {
        document.getElementById('btn').addEventListener('clcik', () => {
            console.log('click',this.state.count);
            this.setState({ count: this.state.count + 1});
            console.log(this.state.count)
        })
    }
    render() {
        return (
            <div>
                <button onClicklick={this.handleClickOne}>clickOne</button>
                <button onClick={this.handleClick}>handleClick</button>
                {/*<button onClick={this.handleClickTwo}>clickTwo</button>*/}
                <p>{this.state.count}</p>
                <button id="btn">clickThree</button>
            </div>

        )
    }
    handleClickOne=()=> {
         // +1
        this.setState({ count: this.state.count + 1});
        this.setState({ count: this.state.count + 1});
        this.setState({ count: this.state.count + 1});
        console.log(this.state.count)
    };
    // handleClickTwo =()=> {
    //     setTimeout(() => {
    //         this.setState({ count: this.state.count + 1})
    //         console.log(this.state.count)
    //     }, 10)
    // }



    increment(state, props) {
        return {
            count: state.count + 1
        }
    }

    handleClick=()=> {
        //+3
        this.setState(this.increment);
        this.setState(this.increment);
        this.setState(this.increment);
    }
}

export default Foo;
