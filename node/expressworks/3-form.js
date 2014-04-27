var express = require('express')

var app = express()

app.set('view engine', 'jade') //declare tempalte engine
app.set('views', process.argv[3]) //declare the directory

app.use(express.urlencoded())

app.post('/form', function(req, res) {
res.send(req.body.str.split('').reverse().join(''))
})
app.listen(process.argv[2])


/*
  var path = require('path')
  var express = require('express')
  var app = express()

  app.use(express.urlencoded())

  app.post('/form', function(req, res) {
    res.send(req.body.str.split('').reverse().join(''))
  })

  app.listen(process.argv[2])*/