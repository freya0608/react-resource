
import React, {Suspense,lazy} from "react";

const LazyComp = lazy(()=>import('./lazy.js'));

let data = '', promise ='';
function requestData() {

    if(data) return data;
    if(promise) throw promise;
    promise = new Promise(resolve => {
        setTimeout(()=>{
            data = 'data resolved';
            resolve()
        },2000);
    });
    throw promise;
}

function SuspenseComp() {

    const data = requestData();
    return <p>{data}</p>
}
export default ()=>(
    <Suspense fallback = "loading data">
        {/*在Suspense下有一个或者多个异步，有任何一个抛出promise，在resolve之前都会现在fallback*/}
        <SuspenseComp/>
        <LazyComp/>
    </Suspense>
)
