import React from 'react';
import GoogleLogin from 'react-google-login';


class Login extends React.Component {

  render() {
    const onSuccess = (response) => {
      localStorage.authenticated = true;
      localStorage.userDetails = JSON.stringify(response.profileObj);
      this.props.router.push('/sources');
    };

    const onFailure = () => {
      alert('Could not log you in. Please try again');
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
      <div id="login">
        <h3>Welcome To Articools</h3>
        <h4>Click to log in with your google account</h4>
        <p>{loginButton}</p>
      </div>
    );
  }
}
export default Login;

