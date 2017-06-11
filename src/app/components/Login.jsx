import React from 'react';
import GoogleLogin from 'react-google-login';
import { withRouter } from 'react-router';

class Login extends React.Component {

  render() {
    const onSuccess = (response) => {
      localStorage.authenticated = true;
      localStorage.userDetails = JSON.stringify(response.profileObj);
      this.props.router.push('/sources');
      console.log(response);
    };

    const onFailure = () => {
      alert(`Couldn't log you in. Please try again`);
      this.props.router.push('/login');
    };
    const loginButton =
    <GoogleLogin
      clientId={
        '458845920717-hbpimm618vvmovfat64glahsbj1gjodv' +
        '.apps.googleusercontent.com'
      }
      onSuccess={onSuccess}
      onFailure={onFailure}
      tag='button'
    >
      {/*<FontAwesome name="google" />
      <span> Login with Google</span>*/}
    </GoogleLogin>;
    return (
      <div>
        <h1>Login placeholder</h1>
        {loginButton}
      </div>
    );
  }
}
export default Login;

