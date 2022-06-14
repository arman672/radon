const UserModel= require("../models/userModel")
  
const createUser = async function(req, res){
    const user = req.body
    const savedData = await UserModel.create(user)
    res.send(savedData)
}

module.exports.createUser = createUser