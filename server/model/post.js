const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    name: {type: String, required: true},
    location: {type: String, required: true},
    description: {type: String},
    PostImage: {type: String, required: true},
    likes: {type: String, default:0},
    date: {type: String}
});

module.exports = mongoose.model('Post', PostSchema);