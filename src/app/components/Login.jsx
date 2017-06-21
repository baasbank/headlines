import React from 'react';
import GoogleLogin from 'react-google-login';
import { hashHistory } from 'react-router';

/**
 * Class for the Login component.
 * @class Login
 * @extends React.Component
 */

class Login extends React.Component {
  render() {
/**
*This stores the user's google details in local storage.
* @param {array} response
* Returns an object that contains the user's details from google.
* @returns {object}
*/
    const onSuccess = (response) => {
      localStorage.authenticated = true;
      localStorage.userDetails = JSON.stringify(response.profileObj);
      hashHistory.push('/sources');
    };

/**
* runs if the user's authentication failed.
*/
    const onFailure = () => {
      alert('Could not log you in. Please try again');
    };

/**
 * This assigns the google login component to a variable for
 * ease of rendering.
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


