const React = require('react')
const Repos = require('./GitHub/Repos')
const UserProfile = require('./GitHub/UserProfile')
const Notes = require('./Notes/Notes')

const Profile = React.createClass({
  getInitialState () {
    return {
      notes: [],
      bio: {
        name: 'Alexius Hale-Dubuque'
      },
      repos: []
    }
  },
  render () {
    console.log(this.props)
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes notes={this.state.notes}/>
        </div>
      </div>
    )
  }
})

module.exports = Profile
