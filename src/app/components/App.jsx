import React from 'react';
import PropTypes from 'prop-types';
import LoginController from './LoginController.jsx';


/**
 * component on which every other component is rendered.
 * @class App
 * @extends React Component
 */

class App extends React.Component {
  render() {
    return (
      <div className="container-fullwidth">
        <div>
          <LoginController />
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;

