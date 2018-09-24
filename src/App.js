import React, { Component } from 'react';
import SignIn from './components/SignIn/SignIn_Component';
import Register from './components/Register/Register_Component';
import Search from './containers/Search_Container';

import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        
       <Search></Search>
      </div>

    );
  }
}

export default App;
