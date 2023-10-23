const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, default: ''},
    user:{type: String}
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;