const React = require('react')

const Notes = React.createClass({
  render () {
    console.log('Notes: ', this.props.notes)
    return (
      <div>
        <p> NOTES </p>

      </div>
    )
  }
});

module.exports = Notes
