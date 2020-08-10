const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const memeSchema = new Schema({
    userName: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    date: {
        type: Date,
        default: ''
    }
});

const Meme = mongoose.model('Meme', memeSchema);

module.exports = Meme;