import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './components/Routing';
import * as serviceWorker from './serviceWorker';

window.$HOST_URL = "http://127.0.0.1:5000"         //global variable
window.$HEADER_MENU = "/header/json"
window.$SERVICE_MENU = "/servicemenu/json"
window.$TECH_DESCRIPTION = "/technology/json"
window.$ADDRESS = "/address/json"
window.$FOOTER = "/footer/json"
window.$FOOTER_ICON = "/footericon/json"
window.$FOOTER_END = "/footerend/json"

ReactDOM.render(<Routing />, document.getElementById('root'));
serviceWorker.unregister();