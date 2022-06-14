const ProductModel= require("../models/productModel")

const createProduct = async function(req, res){
    let product = req.body 
    const savedData = await ProductModel.create(product)
    res.send(savedData)
}

module.exports.createProduct= createProduct
  