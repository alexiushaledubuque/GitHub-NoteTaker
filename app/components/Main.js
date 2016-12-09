const React = require('react')
import SearchGithub from './SearchGithub'

const Main = React.createClass({
  render () {
    return (
      <div className="main-container">
        <nav  className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            <SearchGithub />
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main

// import React from 'react';
// import SearchGithub from './SearchGithub'
//
// const Main = ({children, history}) => {
//   return (
//     <div className="main-container">
//       <nav className="navbar navbar-default" role="navigation">
//         <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
//           <SearchGithub history={history}/>
//         </div>
//       </nav>
//       <div className="container">
//         {children}
//       </div>
//     </div>
//   )
// }
//
// export default Main
