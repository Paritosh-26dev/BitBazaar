const express = require("express");
const router = express.Router();
const User = require("../models/userCard");

router.route("/findUser").post((req, res) => {

    let err = true;
    let success = false;
    User.findOne({ username: req.body.username }).then(result => {
       
        if (result) 
        {
            if (result.password == req.body.password) 
            {
                err = false;
                success = true;
            }
        }
        const response = {
            success: success,
            error: err,
            msg: 'Invalid username or password',
            user: req.body.username,
            password: req.body.password,
            // token: null
        };
        res.send(response);
    })
});

module.exports = router;