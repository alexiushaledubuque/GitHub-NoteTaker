import React from 'react'
import { Router, browserHistory } from 'react-router'
import routes from '../config/routes'

export default class AppRoutes extends React.Component {
  render () {
    return (
      <Router history={browserHistory} routes={routes} />
    )
  }
}