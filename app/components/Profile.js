const React = require('react')

const Profile = React.createClass({
  getInitialState () {
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },
  render () {
    console.log(this.props)
    return (
      <div className="row">
        <div className="col-md-4">
          User Profile component --> {this.props.params.username}
        </div>
        <div className="col-md-4">
          Repos component
        </div>
        <div className="col-md-4">
          Notes component
        </div>
      </div>
    )
  }
})

module.exports = Profile
