const { default: mongoose } = require("mongoose");

const purchaseSchema = new mongoose.Schema({
    productId: { type: 'ObjectId', required: true, ref: 'Product' },
    userId: { type: 'ObjectId', required: true, ref: 'User' },
    quantity: { type: Number, required: true },
    status: { type: String, required: true, default: 'COMPLETED' }
});

module.exports.Purchase = mongoose.model('Purchase', purchaseSchema);