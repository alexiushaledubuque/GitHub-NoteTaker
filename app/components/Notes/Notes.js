const React = require('react')
const NotesList = require('./NotesList')

const Notes = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  render () {
    // console.log('Notes: ', this.props.notes)
    return (
      <div>
        <h3> Notes for {this.props.username} </h3>
        <NotesList notes={this.props.notes} />
      </div>
    )
  }
});

module.exports = Notes
