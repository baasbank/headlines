import React from 'react';
import { Link, hashHistory } from 'react-router';
import PropTypes from 'prop-types';

/**
* This component shows the navigation bar at the top of the app.
* @class LoginCtrl
* @extends React.Component
*/
class LoginController extends React.Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }

  /**
  * This method is called when a user clicks on the logout button.
  * @method handleLogoutClick
  * @memberOf LoginController
  */
  handleLogout() {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('userDetails');
    localStorage.removeItem('name');
    hashHistory.push('/');
  }

  render() {
    /**
    * @param {function} props- handle logout
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
    const userName = JSON.parse(localStorage.getItem('name'));
    const userIsLoggedIn = localStorage.getItem('authenticated');
    if (userIsLoggedIn) {
      button = <LogOutButton className='logout-Button' onClick={this.handleLogout} />;
      sourcesLink = <Link className="header" to="Sources">News Sources </Link>;
    }

    return (
      <nav
        className="navbar navbar-inverse navbar-collapse header-nav">
        <div className="container-fluid navba">
          <div className="navbar-header">
            <Link className="navbar-brand">Articools</Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              { sourcesLink }
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right navbar-btn">
            <li className="username">{ userName }</li>
            <li>{button}</li>

          </ul>
        </div>
      </nav>
    );
  }
}

LoginController.PropTypes = {
  LogOutButton: PropTypes.func
};

export default LoginController;
