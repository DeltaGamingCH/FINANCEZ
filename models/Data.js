// models/User.js
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true }, 
    
});

const User = mongoose.model('User', userSchema);

module.exports = User;
