import React from 'react'

class NotesList extends React.Component {
  render () {
    const { notes } = this.props
    return (
      <ul className='list-group notesList'>
        {notes.map((note, index) => (
          <li className='list-group-item' key={index}>{note}</li>
        ))}
      </ul>
    )
  }
}

export default NotesList
