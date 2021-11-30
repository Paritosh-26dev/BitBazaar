const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema for user's personal info
const userSchema = new Schema({
    username: String,
    fname: String,
    password: String,
    phoneno: Number
});

const User = mongoose.model('users', userSchema);

module.exports = User;

module.exports.saveUser = function(data, done) {
    const user = new User({
        username: data.username,
        fname: data.fname,
        password: data.password,
        phoneno: data.phoneno
    });
    User.findOne({ username: data.username }).then(function(result) {
        if (result === null) {
            user.save().then(function() {
                done(true);
            });
        } else {
            done(false);
        }
    });
}