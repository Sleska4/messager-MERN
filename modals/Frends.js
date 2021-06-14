const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    owner: {type: Types.ObjectId, ref: 'User'},
    name: {type: String},
    id: {type: String},
})

module.exports = model('Friends', schema)