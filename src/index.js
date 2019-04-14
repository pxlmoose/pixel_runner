import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



ReactDOM.render(<AppRouter />, document.getElementById('app'));


// code below will be used once there's an actual 'loading' page

// ReactDOM.render(<p>loading...</p>, document.getElementById('app'));

// let hasRendered = false;
// const renderApp = () => {
//     if (!hasRendered) {
//         ReactDOM.render(jsx, document.getElementById('app'));
//         hasRendered = true;
//     }
// }