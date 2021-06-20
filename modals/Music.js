const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    title: {type: String, required: true},
    author: {type: String},
    link: {type: String, required: true, unique: true},
})

module.exports = model('Music', schema)