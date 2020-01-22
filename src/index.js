import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



// import App from './demos/hooks/index';
// import App from './demos/ref/index';
// import App from './demos/ref/index1';
// import App from './demos/ref/index3';
// import App from './demos/forword-ref/index';
// import App from './demos/context/index';
// import App from './demos/concurrent-mode/index';
// import App from './demos/suspense/index';
// import App from './demos/children/index';
// import App from './demos/state/index';
import App from './demos/debounce/index';




import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
