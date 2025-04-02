const { Product } = require("../models/products.schema");

module.exports.createProduct = async (data) => {
    const product = await Product.findOne({ sku: data.sku });
    if (product) {
        throw new Error('Product already exists')
    }
    const newProduct = new Product(data);
    await newProduct.save();
    return 'Success'
}

module.exports.updateProduct = async (data) => {
    const product = await Product.findOne({ id: data.id });
    if (!product) {
        throw new Error('Product does not exist')
    }
    await Product.updateOne({ _id: data.id }, { $set: { 
        stock: data.stock, 
        price: data.price, 
        status: data.status, 
        description: data.description 
    } })
    return 'Success'
}