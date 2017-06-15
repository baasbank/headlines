import React from 'react';
import Topbar from './Topbar.jsx';
import Footer from './Footer.jsx';


class General extends React.Component {
  render() {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));

    return (
      <div>
          <Topbar />
        {/*<p>Welcome, {userDetails.givenName}</p>
        <img src={userDetails.imageUrl}/>*/}
        <div className="news-body">
          {this.props.children}
          <div className="clearfix"></div>
        </div>
          <Footer />
      </div>
    );
  }
}

export default General;
