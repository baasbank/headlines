import React from 'react';

export default class General extends React.Component {
  render() {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));

    return (
      <div>
        <h1>General header placeholder</h1>
        <p>Welcome, {userDetails.givenName}</p>
        <img src={userDetails.imageUrl}/>
        <div>
          {this.props.children}
        </div>
        <div>
          <h1>Footer placeholder</h1>
        </div>
      </div>
    );
  }
}
