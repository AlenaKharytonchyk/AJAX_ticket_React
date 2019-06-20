import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card'
import * as serviceWorker from './serviceWorker';
import MyAPIComponent from './MyAPIComponent';

ReactDOM.render(<Card />, document.getElementById('root'));
ReactDOM.render(<MyAPIComponent/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();