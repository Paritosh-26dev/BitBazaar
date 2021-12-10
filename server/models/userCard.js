const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema for user's personal info
const userSchema = {
    username: String,
    password: String,
};

const User = mongoose.model('users', userSchema);

module.exports = User;

module.exports.saveUser = function(data, done) {
    const user = new User({
        username: data.username,
        password: data.password,
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