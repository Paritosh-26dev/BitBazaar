const mongoose = require("mongoose") ;

const itemSchema = {
    name: String,
    price: Number,
    description: String,
    category: String
}

const Item = mongoose.model("Item" , itemSchema) ;

module.exports = Item ;