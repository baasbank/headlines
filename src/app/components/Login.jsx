import React from 'react';
import GoogleLogin from 'react-google-login';
import { hashHistory } from 'react-router';

/**
 * Class for the Login component.
 * @class Login
 * @extends React.Component
 */

class Login extends React.Component {
  componentWillMount() {
    if (localStorage.getItem('name')) {
      hashHistory.push('/sources');
    }
  }
  render() {
/**
* @description This stores the user's google details in local storage.
* @param {array} response- response from google
* @returns {void}
*/
    const onSuccess = (response) => {
      localStorage.authenticated = true;
      localStorage.userDetails = JSON.stringify(response.profileObj);
      localStorage.name = JSON.stringify(response.profileObj.name);
      hashHistory.push('/sources');
    };

/**
* @description this function runs if the user's authentication failed.
* @method 
*/
    const onFailure = () => {
      alert('Could not log you in. Please try again');
    };

/**
 * @description Assign the google login component to a variable.
 * @returns react elements
 */
    const loginButton =
    <GoogleLogin
      clientId = {process.env.CLIENT_ID}
      onSuccess={onSuccess}
      onFailure={onFailure}
      tag="button">Login with Google</GoogleLogin>;

    return (
      <div className="container">
        <div className="intro">
          <h3>Welcome To Articools</h3>
          <h4>See news from over 70 sources from around the world</h4>
          <h4>Click to log in with your google account</h4>
          <div><p>{loginButton}</p></div>
        </div>
      </div>
    );
  }
}

export default Login;

