const React = require('react');
const ReactDOM = require('react-dom')

const Main = React.createClass({
  render () {
    return (
      <div>
        Hello World
      </div>
    )
  }
});

// module.exports = Main
// ReactDOM.render (
//   <Router>{routes}</Router>, document.getElementById('app')
// )

ReactDOM.render (
  <Main />, document.getElementById('app')
)
