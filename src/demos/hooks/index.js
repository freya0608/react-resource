import React,{
    memo,
    createContext,
    forwardRef,

    useState,
    useEffect,
    useCallback,
    useContext,
    useRef,
    useImperativeHandle
} from 'react';

const TestContext = createContext('default');


const Comp = memo((props)=>{
    useEffect(()=>{
        console.log('comp updated');
    });

    const updateValue = ()=>{
        props.onClick(props.value + '1')
    };

    return<button
        style={{width:'200px',height:"40px",background:'red',margin:'20px'}}
        onClick={updateValue}>
        comp button{props.name}
    </button>
});


const ContextComp = forwardRef((props,ref)=>{
    const context = useContext(TestContext);
    useEffect(()=>{
        console.log('context comp updated')
    });

    useImperativeHandle(ref,()=>({
        method(){
            console.log('method invoked')
        }
    }));
    return <p>{context}</p>
});


export default function App() {
    const [ name,setName ] = useState('freya');
    const [ compName,setCompName ] = useState('compName');
    const ref = useRef();

    useEffect(()=>{
        console.log('component update');

        ref.current.method();

        return ()=>{
            console.log('unbind');
        }

    },[]);  //  去掉这数组就会每次都调用。


    const compCallback = useCallback((value)=>{
        setCompName(value);
    },[compName]);  //演示没有[compName] 每次Comp都会调用effect

    return (
        <div className="App">
            <input  style={{width:'200px',height:"40px",border:'1px solid red',margin:'20px'}}
                type="text" value={name} onChange={e => setName(e.target.value)}/>
            <Comp name={compName} onClick = {compCallback}/>
            <TestContext.Provider value ={name} >
                <ContextComp ref = {ref}/>
            </TestContext.Provider>

        </div>
    );
}


