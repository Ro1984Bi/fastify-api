const Product = require('../models/product.model');

const getProducts =  async (req, reply) => {
    const products = await Product.find();
    return products
}; 

const getProduct =  async (req, reply) => {
    const product = await Product.findById(req.params.id)
 return reply.code(201).send(product);
};

const createProduct = async (request, reply) => { 
    const newProduct = new Product(request.body);
    console.log(newProduct)
    
    await newProduct.save();

    reply.code(201).send(newProduct);
};

const deleteProduct =  async (request, reply) => {
    await Product.findByIdAndDelete(request.params.id)
    reply.code(204).send();
};

const updateProduct =  async (request, reply) => {
    const product = await Product.findByIdAndUpdate(
        request.params.id,
        request.body,
        { new: true }
    );

    reply.code(200).send(product)
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct,
}