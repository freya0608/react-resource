import React from "react";
export default class RefDemo extends React.Component{

    constructor(props) {
        super(props);
        this.objRef = React.createRef();
    }

    componentDidMount() {
        setTimeout(()=>{
            this.refs.stringRef.textContent = 'string ref got';
            this.methodRef.textContent = 'methodRef ref got';
            this.objRef.current.textContent = 'objRef ref got';
        },1000)
    }

    render() {
        return(
            <>
                <p ref = "stringRef"> span1 </p>
                <p ref = {ele =>(this.methodRef = ele)}> span3 </p>
                <p ref = { this.objRef }> span3 </p>
            </>
        )
    }
}
