const React = require('react')

const Repos = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },
  render () {
    return (
      <div>
        <p> REPOS </p>
        <p> Username: {this.props.username}</p>
        <p> REPOS: {this.props.repos} </p>
      </div>
    )
  }
});

module.exports = Repos
