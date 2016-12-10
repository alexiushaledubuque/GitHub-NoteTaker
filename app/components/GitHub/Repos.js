const React = require('react')

const Repos = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },
  render () {
    console.log('REPOS: ', this.props.repos)
    return (
      <div>
        <p> REPOS </p>
      </div>
    )
  }
});

module.exports = Repos
