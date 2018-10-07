import React, { Component } from 'react';
import {connect} from 'react-redux';

import SignIn from './components/SignIn/SignIn_Component';
import Register from './containers/Register_Container';
import Search from './containers/Search_Container';

import Welcome from './containers/WelcomeLogo_Container.js';
import WelcomeBanner from './containers/WelcomeBanner_Container.js';
import ItemInfo from './containers/ItemInfo_Container.js';

//Webpages
import WelcomePage from './containers/WelcomePage.js' //Incomplete.
import ShoppingPage from './containers/ShoppingPage.js' //Incomplete.

import './App.css';

//Accesses storage.
const mapStateToProps = (state) =>{
  return {
    user: state.activeUser,
    app: state.appStates
  }
}

class App extends Component {
 
  render() {
    switch (this.props.app.page) {
      case 'w':
        return(this.renderWelcome());
        break;
      case 'l':
        return(this.renderWelcome()); //TODO: IMPORT AND RENDER
        break;
      case 'r':
        return(this.renderRegister()); //TODO: IMPORT AND RENDER
        break;
      case 's':
        return(this.renderShopping());
        break;
    }
  }

  renderLogin() {
    return(
      <div className="App">
          <ShoppingPage></ShoppingPage>
          </div>
    );
  }

  renderRegister() {
    return(
      <div className="App">
          <Register></Register>
      </div>
    );
  }

  renderShopping() {
      return(
        <div className="App">
          <ShoppingPage></ShoppingPage>
          </div>
      );
  }

  renderWelcome() {
    return(
      <div className="App">
          <WelcomePage></WelcomePage>
          </div>
    );
  }
}



export default connect(mapStateToProps)(App);

