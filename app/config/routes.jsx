import React from 'react'
import Main from '../components/Main'
import Home from '../components/Home'
import Profile from '../components/Profile'
import NotFound from '../components/NotFound'
import { Route, IndexRoute } from 'react-router'

// export default (
//   <Route path='/' component={Main}>
//     <Route path='/profile/:username' component={Profile} />
//     <IndexRoute component={Home} />
//     <Route path="*" component={NotFound} />
//   </Route>
// )

const routes = (
  <Route path='/' component={Main}>
    <Route path='/profile/:username' component={Profile} />
    <IndexRoute component={Home} />
    <Route path="*" component={NotFound} />
  </Route>
)

export default routes
