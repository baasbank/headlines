import React from 'react';
import LoginCtrl from './LoginCtrl.jsx';

/**
 * Class for the general component on which
 * every other component is rendered.
 * @class General
 * @extends React Component
 */

class General extends React.Component {
  render() {
    return (
      <div className="container-fullwidth">
        <div>
          <LoginCtrl />
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default General;

