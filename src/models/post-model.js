const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    price: {
        type: Number
    },
    type: {
        type: String
    }
});
const PostModel = mongoose.model('posts', PostSchema);
module.exports = PostModel;