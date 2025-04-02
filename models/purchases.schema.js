const { default: mongoose } = require("mongoose");

const purchaseSchema = new mongoose.Schema({
    product: { type: 'ObjectId', ref: 'Product' },
    user: { type: 'ObjectId', ref: 'User' }
});

module.exports.Purchase = mongoose.model('Purchase', purchaseSchema);