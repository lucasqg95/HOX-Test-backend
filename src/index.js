require("dotenv").config();

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express();
const PORT = process.env.PORT || 4000
const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect( MONGODB_URI ,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
});

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(PORT)
