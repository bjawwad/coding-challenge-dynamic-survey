import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';

console.log('process.env.VERSION', process.env.VERSION);
console.log('process.env.PLATFORM', process.env.PLATFORM);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
const App = () => {
    return (
        <div>Hello World</div>
    )
}

ReactDOM.render(<App />, document.querySelector('#app'));