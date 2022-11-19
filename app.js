const express = require('express'); //import express
const app = express(); //inisiasi express
const feedRoutes = require('./routes/feed'); //import routes feed
const mongoose = require('mongoose') // import mongoose

app.use(express.json()); //untuk parsing data dari request berupa json
app.use('/feed', feedRoutes); //mengaktifkan endpoint /feed pada feedRoutes

// membangun koneksi dengan mongodb
mongoose
  .connect('mongodb+srv://cahyo:mongodbcoldplay1234@feed.lyaq2nj.mongodb.net/?retryWrites=true&w=majority')
  .then(result => {
    app.listen(3000);
  })
  .catch(err => console.log('err', err))
