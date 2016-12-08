const React = require('react')
const NotesList = React.createClass({
  render () {
    var notes = this.props.notes.map((note, index) {
      return <li className="list-group-item" key={index}>{note['.value']}
    })
    return(
      <ul className="list-group">
        {notes}
      </ul>
    )
  }
})

module.exports = NotesList
