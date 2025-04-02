const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    email:  { type: String, required: true },
    password:  { type: String, required: true },
    status: { type: String, required: true, default: 'ACTIVE' }
});

module.exports.User = mongoose.model('User', userSchema);