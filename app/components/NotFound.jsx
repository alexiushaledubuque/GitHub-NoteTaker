import React from 'react'

import { Link } from 'react-router'

export default class NotFound extends React.Component {
  render () {
    return (
      <div className="not-found">
        <h2>Page not found</h2>
        <p>
          <Link to="/"></Link>
        </p>
      </div>
    )
  }
}
