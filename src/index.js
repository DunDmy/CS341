//React related Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import {Provider, connect} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

//Imported Libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'rc-calendar/assets/index.css';
import 'tachyons';

//App Specific
import App from './App';
import './index.css';
import {allReducers} from './reducers/Master_Reducer';

//Creates store
const store = createStore(allReducers, applyMiddleware(thunk));

//Connects store to App
ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();