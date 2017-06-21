import React from 'react';
import { Link, hashHistory } from 'react-router';

/**
* This component shows the navigation bar at the top of
* the app.
* @class LoginCtrl
* @extends React.Component
*/
class LoginCtrl extends React.Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }

  /**
  * This method is called when a user clicks on the logout button.
  * @method handleLogoutClick
  * @memberOf Header
  */
  handleLogout() {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('userDetails');
    hashHistory.push('/');
  }

  render() {
    /**
    * @param {object} 
    * @returns react elements
    */
    function LogOutButton(props) {
      return (
        <button
          className="btn btn-default btn-danger"
          onClick={props.onClick}
        >Log out
        </button>
      );
    }

    /**
     * When the user is logged in, this displays a logout button.
     */
    let button = null;
    let sourcesLink = null;
    const userIsLoggedIn = localStorage.getItem('authenticated');
    if (userIsLoggedIn) {
      button = <LogOutButton onClick={this.handleLogout} />;
      sourcesLink = <Link className="header" to="Sources">News Sources </Link>;
    }

    return (
      <nav
        className="navbar navbar-inverse navbar-collapse header-nav">
        <div className="container-fluid navba">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Articools</Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              { sourcesLink }
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right navbar-btn">
            <li>
              {button}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default LoginCtrl;
