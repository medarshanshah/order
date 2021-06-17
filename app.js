const express = require('express')
const mongoose = require('mongoose')

const app = express()


// Atlas Database Connection
const dbURI = 'mongodb+srv://user:n8wiS7i922SCiz6@cluster.hc0cw.mongodb.net/ordersdb';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
.then((result) => app.listen(6000))
.catch((err) => console.log(err));


// Routes
app.get('/',(req,res) => res.send('Hello World from order service'))