const express = require('express')
const nunjunks = require('nunjucks')
const rank = require('./controller/rankController')
const play = require('./controller/playerController')
const app = express()
nunjunks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})
app.use(express.urlencoded({ extended: false }))
const logMiddleware = (req, res, next) => {
  console.log(`HOST: ${req.headers.host} | URL: ${req.url}  | METHOD: ${req.method}`)
  return next()
}
app.set('view engine', 'njk')
app.use(logMiddleware)
app.get('/', rank.topTen)
app.get('/new', (req, res) => {
  res.render('new')
})
app.get('/:position',rank.getPositionPlayer)
app.post('/create', play.insertPlayer)

app.listen(3000)
