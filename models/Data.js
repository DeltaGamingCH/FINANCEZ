// models/User.js
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true }, 
    amount: { type: Number, required: true },
    amountType: { type: Boolean, required: true }
});

const User = mongoose.model('Data', dataSchema);

module.exports = User;
