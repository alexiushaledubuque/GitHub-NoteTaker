import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'

import AppRoutes from './config/routes'

ReactDOM.render(
  <Router history={hashHistory}>{AppRoutes}</Router>,
  document.getElementById('app')
)
