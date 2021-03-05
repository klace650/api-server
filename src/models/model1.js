'use strict';

const mongoose = require('mongoose');

const schema1 = mongoose.Schema({
    name: {type: String, required: true},
    color: {type: String, required:true},
    size: {type: Number, required: true}
});

const model1 = mongoose.model('model1', schema1);

module.exports = model1;