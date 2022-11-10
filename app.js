const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require('cookie-parser');
const Router = require("./routes/Routes")
const bodyParser = require("body-parser")
const app = express()
let cors = require("cors")
const morgan = require("morgan")
app.use(cookieParser());

app.use(morgan("dev"))

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/ecomerence")
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(cors())

app.use(Router)


app.listen(5000)