import React from 'react';
import { hashHistory } from 'react-router';
import GoogleLogin from 'react-google-login';



class Login extends React.Component {
  render() {
    const onSuccess = (response) => {
      localStorage.authenticated = true;
      localStorage.userDetails = JSON.stringify(response.profileObj);
      hashHistory.push('/sources');
    };

    const onFailure = () => {
      alert('Could not log you in. Please try again');
      hashHistory.push('/');
    };
    const loginButton =
    <GoogleLogin
      clientId={
        '458845920717-hbpimm618vvmovfat64glahsbj1gjodv' +
        '.apps.googleusercontent.com'
      }
      onSuccess={onSuccess}
      onFailure={onFailure}
      tag='button'>Login with Google</GoogleLogin>;
    return (
      <div className="container">
        <div className="intro">
        <h3>Welcome To Articools</h3>
        <p><h4>See news from over 70 sources from around the world</h4></p>
        <p><h4>Click to log in with your google account</h4></p>
          <div><p>{loginButton}</p></div>
        </div>
      </div>
    );
  }
}
export default Login;


