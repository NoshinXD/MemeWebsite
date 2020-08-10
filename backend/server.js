const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("mongoDB connection established yaaaay.");
})

const memeRouter = require('./routes/memes');
const userRouter = require('./routes/users');
const exerciseRouter = require('./routes/exercises');

app.use('/memes', memeRouter);
app.use('/users', userRouter);
app.use('/exercises', exerciseRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});