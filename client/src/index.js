import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {store} from './redux/store/store';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

serviceWorker.register();
