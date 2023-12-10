const newsRouter = require('./news')
const testRouter = require('./test')
const siteRouter = require('./site') 

function route(app) {

  app.use('/news', newsRouter)

  app.use('/test', testRouter)

  app.use('/', siteRouter )

  // app.get("/", (req, res) => {
  //   res.render("home")
  // })

  // app.get("/news", (req, res) => {
  //   res.render("news")
  // })

  // app.get("/test", (req, res) => {
  //   res.render("test")
  // })
  
}

module.exports = route
