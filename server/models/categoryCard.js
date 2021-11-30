const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema for item categorization like clothing, electronics etc.
const categorySchema = new Schema({
    name: String
});

const Category = mongoose.model('categories', categorySchema);

module.exports = Category;