import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ClickCounter from './ClickCounter';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <div>
        <App/>
        <ClickCounter/>
    </div>,
    document.getElementById('root')
);
registerServiceWorker();
