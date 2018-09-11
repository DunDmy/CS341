import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// added Store object from redux lib 9/10/2018 did
// added Provider and connect from react-redux lib 9/10/2018 did
// added Tachyons lib in place of CSS 9/10/2018 did
import { Provider, connect } from 'react-redux';
import { createStore} from 'redux';
import 'tachyons';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
