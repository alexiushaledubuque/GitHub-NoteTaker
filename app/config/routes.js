const React = require('react')
const Main = require('../components/Main')
const Home = require('../components/Home')
const Profile = require('../components/Profile')
import { Router,  Route, IndexRoute } from 'react-router'

module.exports = (
  <Route path="/" component={Main}>
    <Route path="profile/:username" component={Profile} />
    <IndexRoute component={Home} />
  </Route>
);
