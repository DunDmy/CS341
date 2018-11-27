import React, { Component } from 'react';
import {connect} from 'react-redux';

import SignIn from './components/SignIn/SignIn_Component';
import Register from './containers/Register_Container';
import Search from './containers/Search_Container';
import Welcome from './containers/WelcomeLogo_Container.js';
import WelcomeBanner from './containers/WelcomeBanner_Container.js';
import ItemInfo from './containers/ItemInfo_Container.js';
import Checkout from './containers/Checkout_Container.js';
import Billing from './containers/Billing_Container.js';
import ShoppingCart from './containers/ShoppingCart_Container.js'

//Webpages
import WelcomePage from './containers/WelcomePage.js' //Incomplete.
import ShoppingPage from './containers/ShoppingPage.js' //Incomplete.
import RegisterPage from './containers/RegisterPage.js' //Incomplete.
import LoginPage from './containers/LoginPage.js' //Incomplete.
import AdminPage from './containers/AdminPage.js'

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
    //console.log(this.props);
    //return(<ShoppingCart></ShoppingCart>);
    //return(<AdminPage></AdminPage>);
    //return(<Billing></Billing>)
    //return(<Checkout></Checkout>);
    //return(<LoginPage></LoginPage>);
    //return(this.renderAdmin())
    if(this.props.user.isAdmin) { return(this.renderAdmin()); }
    switch (this.props.app.page) {
      case 'w':
        return(this.renderWelcome());
        break;
      case 'l':
        return(this.renderLogin()); //TODO: IMPORT AND RENDER
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
          <LoginPage></LoginPage>
      </div>
    );
  }

  renderRegister() {
    return(
      <div className="App">
          <RegisterPage></RegisterPage>
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

  renderAdmin() {
    return(
      <div className="App">
          <AdminPage></AdminPage>
      </div>
    );
  }
}



export default connect(mapStateToProps)(App);

