import React from "react";


class APP extends React.Component{
    render() {
        return(
            <div>
               input1 <input type="text" onChange={this.debounce(this.diaoYong,2000)}/>
               input2 <input type="text" onChange={this.throttle(this.diaoYong,2000)}/>
            </div>
        )
    }


    diaoYong = ()=>{
        console.log('调用')
    };
    debounce =(func, time = 0)=> {
        if (typeof func !== 'function') {
            throw new TypeError('Expect a function')
        }

        let timer;

        return function () {
            if (timer) {
                clearTimeout(timer)
            }

            timer = setTimeout(() => {
                func()
            }, time)
        }
    }

    throttle=(func, wait = 0, trailing = true)=> {
        if (typeof func !== 'function') {
            throw new TypeError('Expected a function')
        }

        let timer;
        let start = + new Date();

        return function (...rest) {
            let now = + new Date();

            if (timer) {
                clearTimeout(timer)
            }
            if (now - start >= wait || trailing) {
                func.apply(this, rest);
                start = now;
                trailing = false
            } else {
                timer = setTimeout(() => {
                    func(...rest)
                }, wait)
            }
        }
    }
}
export default APP

