const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try{
    let data = req.body;
    if(Object.keys(data).length == 0){
      res.send({ msg: "Bad user input"});
    }
    let savedData = await userModel.create(data);
    console.log(req.newAtribute);
    res.status(201).send({ msg: savedData });
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
}
};


const loginUser = async function (req, res) {
  try{
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password });
   
    if (!user)
     return res.status(401).send({status: false, msg: "username or the password is not corerct",
    });
   
    let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "radon",
      organisation: "FunctionUp",
    },
    "functionup-radon"
    );
  res.setHeader("x-auth-token", token);
  res.status(200).send({ status: true, token: token });
  }
  catch(error){
    res.status(500).send({ msg: "Error", error: err.message })
  }
};


const getUserData = async function (req, res) {
  try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);//.findById(userId)
  if (!userDetails)
    return res.status(404).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });
  }
  catch(error){
    res.status(500).send({ msg: "Error", error: err.message })
  }
};


const updateUser = async function (req, res) {
try{
  let userId = req.params.userId;
  console.log(userId);
  let user = await userModel.findById(userId);

  if (!user) {
      return res.status(404).send("No such user exists");
  }

  let userData = req.body;
  console.log(userData);
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new: true});
  console.log(updateUser)
  res.status(200).send({ status: "updatedUser", data: updatedUser });
}
catch(error){
  res.status(500).send({ msg: "Error", error: err.message })
}
};


const deleteUser = async function(req, res){
  
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);

  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(404).send("No such user exists");
  }
  let deleteUser = await userModel.findOneAndUpdate({ _id: userId }, {isDeleted: true}, {new:true});
  res.status(200).send({ status: "deletedUser", data: deleteUser });
  }
  catch(error){
    res.status(500).send({ msg: "Error", error: err.message})
  }
 }

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
