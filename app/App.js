const React = require('react')
const ReactDOM = require('react-dom')
import { Router, Route, hashHistory } from 'react-router'

const routes = require('./config/routes')

ReactDOM.render(
  <Router history={ hashHistory }>{routes}</Router>,
  document.getElementById('app')
)
