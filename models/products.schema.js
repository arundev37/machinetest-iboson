const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    sku:  { type: String, required: true },
    description: { type: String },
    stock: { type: Number, required: true, default: 10 },
    price: { type: Number, required: true, default: 0 },
    status: { type: String, required: true, default: 'ACTIVE' }
});

module.exports.Product = mongoose.model('Product', productSchema);