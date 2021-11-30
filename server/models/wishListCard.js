const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema for user requirement to be added in Wishlist
const wishListSchema = new Schema({
    title: String,
    username: String,
    desc: String
});

const Requirement = mongoose.model('requirement', wishListSchema);

const db = mongoose.connection;
const collection = db.collection('requirement');

module.exports = Requirement;