const {createServer} = require('http')
const compression = require('compression')
const morgan = require('morgan')
const path = require('path')
const express = require('express')
const port = process.env.PORT || 4000
const app = express()
const dev = app.get('env') !== 'production'
const { createProxyMiddleware } = require('http-proxy-middleware');
  
if(!dev) {
  app.disable('x-powered-by')
  app.use(compression())
  app.use(morgan('common'))
  app.use(express.static(path.resolve(__dirname, 'build')))

  app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://farmconnect-backend/',
      changeOrigin: true,
    })
  );
}
if(dev){
  app.use(morgan('dev'))
}
const server = createServer(app)

server.listen(port,(err) => {
  if (err) throw err
  console.log(`server listening on port ${port}`)
})