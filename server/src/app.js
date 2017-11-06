//Express är skalet. Minmialist web framework for server side shit
//Req och Res kommer från Express. Req innehåller inkommande paket. Med Res kan vi skicka tillbaka ett svar
const express = require('express')
//Body-parser gör att den inkommande datan från requests blir mänskligt läsbar
const bodyParser = require('body-parser')
//Cors har att göra med security-stuff
const cors = require('cors')
//Låter oss logga vad HTTP:n håller på med
const morgan = require('morgan')
//Är toools för MongoDB, som schemas etc.
const mongoose = require('mongoose')
//Item är ett schema för ett item som vi har skapat
const item = require("../models/portfolioItem")

//Initierar express och lägger till allt vårt fancy stuff from above
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Om man från /admin i Client frågar efter items så skickar Express tillbaka items
// Admin är en PATH på servern
app.get('/admin', (req, res) => {
  item.find({}, 'title description', function (error, items) {
    if (error) { 
    	console.error(error); 
    }
    res.send({
      items: items
    })
  }).sort({_id:-1})
})

//Nu snackar vi tung DATABASE. Och vi har en Database som heter posts
mongoose.connect('mongodb://localhost:27017/posts')
//Vårt Mongoose-objekt
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"))
db.once("openUri", function(callback){
  console.log("Connection Succeeded")
})

// Add new Item
app.post('/admin', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var new_item = new item({
    title: title,
    description: description
  })

  new_item.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
  })
})

// Fetch single post
app.get('/item/:id', (req, res) => {
  var db = req.db;
  item.findById(req.params.id, 'title description', function (error, item) {
    if (error) { console.error(error); }
    res.send(item)
  })
})

// Update a post
app.put('/items/:id', (req, res) => {
  var db = req.db;
  item.findById(req.params.id, 'title description', function (error, item) {
    if (error) { console.error(error); }

    item.title = req.body.title
    item.description = req.body.description
    item.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})

app.listen(process.env.PORT || 8081)