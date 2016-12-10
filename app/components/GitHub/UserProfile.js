const React = require('react')

const UserProfiles = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
  },
  render () {
    console.log('BIO: ', this.props.bio)
    return (
      <div>
        <p> USER PROFILE! </p>
        <p> Username: {this.props.username} </p>
      </div>
    )
  }
});

module.exports = UserProfiles
