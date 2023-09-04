const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    phoneNumber: String,
    email: String,
    linkedId: mongoose.Types.ObjectId,
    linkPrecedence: String,
}, { timestamps: true })

module.exports = mongoose.model('Contact', contactSchema);