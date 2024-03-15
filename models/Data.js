// models/User.js
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true }, 
    amount: { type: Number, required: true },
    type: { type: String, enum: ['income', 'expense'], required: true },
    createdAt: { type: Date, default: Date.now },
    lastEdited: { type: Date, default: Date.now }
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
