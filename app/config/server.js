// config/server.js

require('babel-register')

import path from 'path'
import { Server } from 'http'
import Express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './config/routes'

// initialize the server and configure support for ejs templates
const app = new Express()
const server = new Server(app)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'pubilc'))

// universal routing and rendering
app.get('*', (req, res) => {

  match(

    { routes, location: req.url }, 

    (error, redirectionLocation, renderProps) => {
    
    // in case of error display the error message
    if (error) {
      res.status(500).send(error.message)
    } 

    // in case of redirect propagate the redirect to the browser
    if (redirectionLocation) {
      return res.redirect(302, redirectionLocation.pathname + redirectionLocation.search)  
    } 

    // generate the React markup for the current route
    let markup

    if (renderProps) {
      // if the current route matched we have renderProps
      markup = renderToString(<RouterContext {...renderProps}/>)
    } else {
      // otherwise we can render a 404 page
      res.status(404)
    }

    // render the index template with the embedded React markup
    return res.render('index', { markup })
    }
  )
})

// start the server
const port = process.env.PORT || 3000

server.listen(port, err => {
  if (error) {
    return console.error(error)
  }
  console.info(`Server listening on http://localhost:${port} [${env}]`)
})


