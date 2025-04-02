const { Product } = require("../models/products.schema");
const { Purchase } = require("../models/purchases.schema");

module.exports.createPurchase = async (data) => {
    const product = await Product.findOne({ _id: data.productId });
    if(!product || (product && (product.stock < data.quantity || product.status !== 'ACTIVE'))) {
        throw new Error('Product not available')
    }
    product.stock -= data.quantity;
    await product.save();
    const newPurchase = new Purchase(data);
    const purchase = await newPurchase.save();
    return {message: 'Success', id: purchase._id}
}

module.exports.listPurchases = async (data) => {
    const purchases = await Purchase.find({ userId: data.userId, status: 'COMPLETED' }).populate({ path: 'productId', select: 'name _id price' }).populate({ path: 'userId', select: 'name _id' });
    
    return {message: 'Success', purchases}
}