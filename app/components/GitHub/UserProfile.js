const React = require('react')

const UserProfiles = React.createClass({
  render () {
    return (
      <div>
        <p> USER PROFILE! </p>
        <p> Username: {this.props.username} </p>
        <p> Bio: {this.props.bio.name} </p>
      </div>
    )
  }
});

module.exports = UserProfiles