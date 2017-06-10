import React from 'react';

export default class General extends React.Component {
  render() {
    return (
      <div>
        <h1>General header placeholder</h1>
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
