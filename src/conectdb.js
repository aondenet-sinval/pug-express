const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bdposts');

const postSchema = new mongoose.Schema({
    title: String,
    conteudo: String
}, { collection: 'posts',  versionKey: false }
);

module.exports = { Mongoose: mongoose, PostSchema: postSchema }