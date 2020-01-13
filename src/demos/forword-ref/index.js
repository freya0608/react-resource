import React from "react";

const TargetComponet = React.forwardRef((props,ref ) =>(
    <input type="text"
           ref={ ref }
    />
));

export default class Comp extends React.Component{
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        this.ref.current.value = 'ref get input'
    }

    render() {
        return <TargetComponet ref={this.ref} />
    }
}
