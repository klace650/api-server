'use strict';
const mongoose = require('mongoose');

const ModelOne = require('./src/models/model1.js');

const MONGODB_URI = 'mongodb://localhost:27017/api-serverdb';

mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

let connectToDB = async () => {
  let sample = {
      name: 'jay',
      color: 'blue',
      size: 4
  };
  let saveSample = new ModelOne(sample);
  await saveSample.save();
  console.log(saveSample);
};

connectToDB();

// let jay = await ModelOne.findById()