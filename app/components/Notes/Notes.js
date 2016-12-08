const React = require('react')

const Notes = React.createClass({
  render () {
    console.log('Notes: ', this.props.notes)
    return (
      <div>
        <h3> Notes for {this.props.username} </p>

      </div>
    )
  }
});

module.exports = Notes
