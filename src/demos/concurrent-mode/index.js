import React from "react";

import {flushSync} from 'react-dom';  //强制使用优先级最高的更新
// const ConcurrentMode = React.unstable_ConcurrentMode;
import './style.css'
class Parent extends React.Component{
    state = {
        async:true,
        num:1,
        length:1000,
    };

    componentDidMount() {
        this.interval = setInterval(()=>{
            this.updateNum()
        },200)
    }

    componentWillUnmount() {
        if (this.interval){
            clearInterval(this.interval)
        }
    }
    updateNum(){
        const newNum = this.state.num ===3?0:this.state.num+1;
        if(this.state.async){
            this.setState({
                num:newNum
            })
        }else {
            flushSync(()=>{
                this.setState({
                    num:newNum
                })
            })
        }
    }

    render() {
        const children = [];
        const {length,num,async} = this.state;

        for (let i=0;i<length;i++){
            children.push(
                <div className="item" key={i}>
                    {num}
                </div>,
            )
        }

        return(
            <div>
                <input type="text"
                 value={length}
                       onChange={e=>flushSync(()=>this.setState({length: parseInt(e.target.value)}))}
                />
                async:{ ' ' }
                <input type="checkbox"
                       checked={async}
                       onChange={()=>flushSync(()=>this.setState({async: !async}))}
                />
                <div className="wrapper">{children}</div>
            </div>
        )

    }
 }

export default ()=>(
    // <ConcurrentMode>
    //     //下面的都是低优先级的更新
    //
    // <Parent/>
    //
    // </ConcurrentMode>
    <div>
        <Parent/>
    </div>
    )

