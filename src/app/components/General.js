import React from 'react';
// import Topbar from './Topbar.jsx';
import LoginCtrl from './LoginCtrl.jsx';
// import Footer from './Footer.jsx';
{/*<div>*/}
//           //<Topbar />*/}
//         {/*<p>Welcome, {userDetails.givenName}</p>
//         <img src={userDetails.imageUrl}/>*/}
//         {/*<div className="news-body">
//           {this.props.children}
//           <div className="clearfix"></div>
//         </div>
//           <Footer />
//       </div>*/}

class General extends React.Component {
  render() {
    // const userDetails = JSON.parse(localStorage.getItem('userDetails'));

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

