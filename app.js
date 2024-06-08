const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const tweetRoutes = require('./routes/tweets');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/twitter');

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/tweets', tweetRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});