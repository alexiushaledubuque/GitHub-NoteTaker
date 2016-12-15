import React from 'react'

import { Link } from 'react-router'

export default class NotFound extends React.Component {
  render () {
    return (
      <div className="not-found">
        <p>
          <Link to="/"></Link>
        </p>
      </div>
    )
  }
}
