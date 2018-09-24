import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// added Provider and connect from react-redux lib 9/10/2018 did. Need provider to pass data to your components
import { Provider, connect } from 'react-redux';
// added Store object from redux lib 9/10/2018 did. Need this object to store the state of the App
import { createStore} from 'redux';
// added Tachyons lib in place of CSS 9/10/2018 did
import 'tachyons';
// importing  combined reducer
import {allReducers} from './reducers/Master_Reducer';

// creating store variable for states
const store = createStore(allReducers);
console.log(store.getState());
ReactDOM.render(
				<Provider store = {store}>
				<App />
				</Provider>, document.getElementById('root'));
registerServiceWorker();
