const express = require("express") ;
const router = express.Router() ;
const Item = require("../models/itemModel") ;

router.route("/create").post((req,res) => {
    const name = req.body.name ;
    const price = req.body.price ;
    const description = req.body.description ;
    const newItem = new Item({
        name,
        price,
        description
    })

    newItem.save() ;
})

module.exports = router ;