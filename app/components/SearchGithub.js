const React = require('react')
const Router = require('react-router')

const SearchGithub = React.createClass({
  mixins: [Router.History],
  getRef (ref) {
    this.usernameRef = ref
  },
  render () {
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={this.getRef} />
          </div>
          <div>
            <button type="submit" className="btn btn-default btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    )
  }
})

module.exports = SearchGithub
