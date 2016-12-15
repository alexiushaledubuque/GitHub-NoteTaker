// config/server.js

require('babel-register')

const path = require('path')
const { Server } = require('http')
const Express = require('express')
const React = require('react')
const { renderToString } = require ('react-dom/server')
const { match, RouterContext } = require('react-router') 
// const routes = require('./routes.jsx')
const routes = require('./routes')


// initialize the server and configure support for ejs templates
const app = new Express()
const server = new Server(app)

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))


// define the folder that will be used for static assets
app.use(Express.static(__dirname + '/../../public'))


// universal routing and rendering
app.get('*', (req, res) => {

  match(

    { routes, location: req.url }, 

    (err, redirectLocation, renderProps) => {
    
    // in case of error display the error message
    if (err) {
      res.status(500).send(err.message)
    } 

    // in case of redirect propagate the redirect to the browser
    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search)  
    } 

    // generate the React markup for the current route
    let body

    if (renderProps) {
      // if the current route matched we have renderProps
      body = renderToString(<RouterContext {...renderProps} />)
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


