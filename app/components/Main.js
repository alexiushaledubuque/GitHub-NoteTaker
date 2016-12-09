var React = require('react');
var SearchGithub = require('./SearchGithub');

var Main = React.createClass({
  render: function(){
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>

          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;

// const React = require('react')
// const TEST = require('./Profile')
//
// const Main = React.createClass({
//   render () {
//     return (
//       <div className="main-container">
//         <nav  className="navbar navbar-default" role="navigation">
//           <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
//
//           </div>
//         </nav>
//         <div className="container">
//           {this.props.children}
//         </div>
//       </div>
//     )
//   }
// });
//
// module.exports = Main
