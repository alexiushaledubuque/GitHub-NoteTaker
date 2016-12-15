require('babel-register')

import path from 'path'
import { Server } from 'http'
import Express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './config/routes'

const app = new Express()
const server = new Server(app)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(Express.static(path.join(__dirname, 'pubilc'))

app.get('*', (req, res) => {

  match(

    { routes, location: req.url }, 

    (error, redirectionLocation, renderProps) => {
    
    if (error) {
      res.status(500).send(error.message)
    } 

    if (redirectionLocation) {
      return res.redirect(302, redirectionLocation.pathname + redirectionLocation.search)  
    } 

    let markup

    if (renderProps) {
      markup = renderToString(<RouterContext {...renderProps}/>)
    } else {
      res.status(404)
    }

    return res.render('index', { markup })
    }
  )
})

const port = process.env.PORT || 3000

server.listen(port, err => {
  if (error) {
    return console.error(error)
  }
  console.info(`Server listening on http://localhost:${port} [${env}]`)
})


