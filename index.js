'use strict';

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost:27017/api-serverdb';

mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

app.listen(3000, () => {
    console.log('Server is on or something');
});
