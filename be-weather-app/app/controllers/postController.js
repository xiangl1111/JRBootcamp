const Post = require('../model/post');
exports.store = (req, res) => {
    const post = new Post( {title: 'sdf', user: '3434343' });
    post.save();
    res.send(post);
}