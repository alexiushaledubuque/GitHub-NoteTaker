import React from 'react'
import ScrollView from 'react-scrollbar'

class Repos extends React.Component {
  render () {
    return (
      <div>
        <h3> User Repos </h3>
        <ScrollView>
        <ul className='list-group'>
          {this.props.repos.map((repo, index) => {
            return (
              <li className='list-group-item' key={index}>
                {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
                {repo.description && <p>{repo.description}</p>}
              </li>
            )
          })}
        </ul>
        </ScrollView>
      </div>
    )
  }
}

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired
}

export default Repos
