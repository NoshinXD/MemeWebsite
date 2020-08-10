const router = require('express').Router();
let Meme = require('../models/meme.model');

router.route('/').get((req, res) => { //  /memes/
    Meme.find()
        .then(memes => res.json(memes))  // memes: we got from the database
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const {
        userName,
        description,
        date
    } = req.body;

    const newMeme = new Meme();

    newMeme.userName = userName;
    newMeme.description = description;
    newMeme.date = Date.parse(date);
    
    newMeme.save()
        .then(() => res.json('new meme added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;