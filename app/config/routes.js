const React = require('react')
const Main = require('../components/Main')
const Home = require('../components/Home')
const Profile = require('../components/Profile')
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router,  Route, IndexRoute } from 'react-router'

const history = createBrowserHistory()

module.exports = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={Main}>
      <Route path="/profile/:username" component={Profile} />
      <IndexRoute component={Home} />
    </Route>
  </Router>
);
