// config/server.js

require('babel-register')

const path = require('path')
const { Server } = require('http')
const Express = require('express')
const React = require('react')
const { renderToString } = require ('react-dom/server')
const { match, RouterContext } = require('react-router') 
const routes = require('./routes.jsx')

// initialize the server and configure support for ejs templates
const app = new Express()
const server = new Server(app)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'public')))

// universal routing and rendering
app.use((req, res) => {

  match(

    { routes, location: req.url }, 

    (err, redirectionLocation, renderProps) => {
    
    // in case of error display the error message
    if (err) {
      res.status(500).send(error.message)
    } 

    // in case of redirect propagate the redirect to the browser
    if (redirectionLocation) {
      return res.redirect(302, redirectionLocation.pathname + redirectionLocation.search)  
    } 

    // generate the React markup for the current route
    let body

    if (renderProps) {
      // if the current route matched we have renderProps
      body = ReactDOMServer.renderToString(
        React.createElement(RouterContext, renderProps)
        )
      res.status(200)
    } else {
      // otherwise we can render a 404 page
      res.status(404)
    }

    // render the index template with the embedded React markup
    return res.render('index', { body })
    }
  )
})

// start the server
const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'production';

server.listen(port, err => {
  if (err) {
    return console.error(err)
  }
  console.info(`Server listening on http://localhost:${port} [${env}]`)
})


