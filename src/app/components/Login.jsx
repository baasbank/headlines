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
* This is the function that gets run if the user's authentication
* was successful. It also stores the user's google details in local
* storage.
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
* This is the function that gets run if the user's authentication
* failed. It also shows an error message.
*/
    const onFailure = () => {
      alert('Could not log you in. Please try again');
      hashHistory.push('/');
    };

/**
 * This assigns the google login component to a variable for
 * ease of rendering.
 * @returns react elements
 */
    const loginButton =
    <GoogleLogin
      clientId={
        '458845920717-hbpimm618vvmovfat64glahsbj1gjodv' +
        '.apps.googleusercontent.com'
      }
      onSuccess={onSuccess}
      onFailure={onFailure}
      tag="button">Login with Google</GoogleLogin>;

    return (
      <div className="container">
        <div className="intro">
          <h3>Welcome To Articools</h3>
          <h4>See news from over 70 sources from around the world</h4>
          <p><h4>Click to log in with your google account</h4></p>
          <div><p>{loginButton}</p></div>
        </div>
      </div>
    );
  }
}

export default Login;


