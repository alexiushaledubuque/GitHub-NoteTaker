const React = require('react')

const Repos = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },
  render () {
    const repos = this.props.repos.map(function(repo, index){
      return (
        <li className="list-group-item" key={index}>
          {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</h4>}
        </li>
      )
    }
    return (
      <div>
        <p> REPOS </p>
      </div>
    )
  }
});

module.exports = Repos
