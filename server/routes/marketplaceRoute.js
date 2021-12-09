const express = require("express") ;
const router = express.Router() ;
const Item = require("../models/itemModel") ;

router.route("/sell").get((req,res) => {
    Item.find()
    .then(foundItems => res.json(foundItems));
});

module.exports = router ;