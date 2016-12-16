
import React from 'react'
import { hashHistory } from 'react-router'

class SearchGithub extends React.Component {
  getRef (ref) {
    this.usernameRef = ref
  }
  handleSubmit () {
    const username = this.usernameRef.value
    this.usernameRef.value = ''
    hashHistory.push(`/profile/${username}`)
  }
  render () {
    return (
      <div className='col-sm-12'>
        <form onSubmit={() => this.handleSubmit()}>
          <div className='form-group col-sm-3'>
            <a href=''>Return to Main</a>
          </div>
          <div className='form-group col-sm-5'>
            <input type='text' className='form-control' ref={(ref) => this.getRef(ref)} />
          </div>
          <div className='form-group col-sm-4'>
            <button type='submit' className='btn btn-block btn-primary'>
              <span class="glyphicon glyphicon-search" aria-hidden="true">Search Github</span>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

SearchGithub.PropTypes = {
  history: React.PropTypes.object.isRequired
}

export default SearchGithub
