const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require('./routes/api/items');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json())

// DB Config
const db = require("./config/keys").mongoURI;

// connect to mongo DB
mongoose.connect('mongodb://localhost:27017/mern_stack', { useNewUrlParser: true })
	.then(() => console.log("MongoDB is connected"))
	.catch(err => console.log(err))

// Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`))