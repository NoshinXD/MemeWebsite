const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => { //  /users/
    User.find()
        .then(users => res.json(users))  // users: we got from the database
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/signup').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newUser = new User({username, password});
    
    newUser.save()
        .then(() => res.json('User signed up!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:username').get((req,res) => {
    User.find({username: req.params.username})
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/login').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.find({username})
        .then(user => {
            //console.log(user);
            //console.log('here ' + user[0].password);
            if (user.length != 1) {
                res.json('Invalid login 1')
            } else if (password === user[0].password){
                res.json('User logged in');
            }
            else {
                res.json('Invalid login 2');
            }
        })

        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;