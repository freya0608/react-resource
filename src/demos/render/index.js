import React, {Component} from "react"
class List extends Component{
    state = {
        a:1,
        b:2,c:3
    }

    handleClick = () =>{
        this.setState(oldState =>{
            const { a,b,c} = oldState;
            return{
                a:a*a,
                b:b*b,
                c:c*c,
            }
        })
    }
}
