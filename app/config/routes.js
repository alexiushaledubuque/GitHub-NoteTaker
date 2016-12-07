const React = require('react')
const Main = require('../components/Main')
const Home = require('../components/Home')
import { Router,  Route, IndexRoute } from 'react-router'

module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
  </Route>
);
