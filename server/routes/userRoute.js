const express = require("express") ;
const router = express.Router() ;
const User = require("../models/userCard") ;

router.route("/createNewUser").post((req,res) => {
    const username = req.body.username ;
    const password = req.body.password ;
    const newUser = new User({
        username,
        password
    })

    newUser.save() ;
})

module.exports = router ;