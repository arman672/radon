const OrderModel= require("../models/orderModel")
const ProductModel= require("../models/productModel")
const UserModel= require("../models/userModel")

const createOrder = async function(req, res){

    let orderData = req.body 
    let userid = orderData.userId
    let productid = orderData.productId
    let ifUserExists = await UserModel.findOne({_id: userid})
    let ifProductExists = await ProductModel.findOne({_id: productid})


    if (ifUserExists) {

        if (ifProductExists) { 

            const ifFree = req.isFreeAppUser
            if( ifFree == true ) {
                req.body.amount = 0
                req.body["isFreeAppUser"] = true
                const createdOrder = await OrderModel.create(orderData)
                res.send({data : createdOrder})
            } else {
               //paid
                let balance = ifUserExists.balance
                let price = ifProductExists.price
                console.log(price)
                if(balance >= price) {
                    const user = await UserModel.findOneAndUpdate({ _id : userid } , { $inc : { balance : -price}})
                    req.body.amount = price
                    req.isfreeappuser = false
                    const createdOrder = await OrderModel.create(orderData)
                    res.send({data : createdOrder})
                }
                else{
                    res.send({"msg":"Insufficient Balance"})
                }
            }
        }else {
            res.send("error : Invalid ProductId")
        }
    } else {
        res.send("error : Invalid UserId")
    }
}

module.exports.createOrder = createOrder
      