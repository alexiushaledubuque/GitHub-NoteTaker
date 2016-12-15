require('babel-register')

const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const ReactRouter = require('react-router')
const match = ReactRouter.match
const RouterContext = ReactRouter.RouterContext
const _ = require('lodash')
const fs = require('fs')
const port = 9000
const baseTemplate = fs.readFileSync('./public/index.html')
const template = _.template(baseTemplate)
const MainApp = require('./app/App.jsx')
const routes = App.routes

const app = express()

app.use('/public', express.static('./pubilc'))

app.use((req, res) => {
  match ({ routes: routes(), location: req.url } , (error, redirectionLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectionLocation) {
      res.redirect(302, redirectionLocation.pathname + redirectionLocation.search)  
    } else if (renderProps) {
      const body = ReactDOMServer.renderToString(
        React.createElement(RouterContext, renderProps)
      )
      res.status(200).send(template({ body }))
    } else {
      res.status(400).send('Not Found!')
    }
  })
})

console.log('listening on port: ', port)
app.listen(port)
