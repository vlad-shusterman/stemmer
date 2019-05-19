const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    role: {
        type: String
    },
    password: {
        type: String
    }
});
const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;