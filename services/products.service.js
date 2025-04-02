const { Product } = require("../models/products.schema");

module.exports.createProduct = async (data) => {
    const product = await Product.findOne({ sku: data.sku });
    if (product) {
        throw new Error('Product already exists')
    }
    const newProduct = new Product(data);
    const productData = await newProduct.save();
    return {message: 'Success', id: productData._id}
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
    return {message: 'Success'}
}

module.exports.listProducts = async (data) => {
    const products = await Product.find();

    return {message: 'Success', products}
}