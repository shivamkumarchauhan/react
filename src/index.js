import React from 'react';
import ReactDOM from 'react-dom';
import Lhotse from './components/Lhotse';
import * as serviceWorker from './serviceWorker';

window.$HOST_URL = "http://127.0.0.1:5000/header/json"         //global variable

ReactDOM.render(<Lhotse />, document.getElementById('root'));
serviceWorker.unregister();