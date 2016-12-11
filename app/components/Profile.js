import React from 'react'
import Repos from './GitHub/Repos'
import UserProfile from './GitHub/UserProfile'
import Notes from './Notes/Notes'
import getGithubInfo from '../utils/helpers'
import Rebase from 're-base'

class Profile extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      notes: [],
      bio: {},
      repos: []
    }
  }
  componentDidMount () {
    this.init(this.props.params.username)
  }
  componentWillReceiveProps (nextProps) {
    this.init(nextProps.params.username)
  }
  componentWillUnmount () {

  }
  init (username) {
    const childRef = this.ref.child(username)
  this.bindAsArray(childRef, 'notes')

    getGithubInfo(username)
      .then(function(data){
      this.setState({
          bio: data.bio,
          repos: data.repos
      })
      }.bind(this))
  }
  handleAddNote (newNote) {

  }
  render () {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
      <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes username={this.props.params.username}
          notes={this.state.notes}
          addNote={this.handleAddNote} />
        </div>
      </div>
    )
  }

}

export default Profile
