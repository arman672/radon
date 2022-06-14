
const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const checkFreeAppUser= function ( req, res, next) {
    let checkIfFreeUser= req.headers["isfreeappuser"]
    console.log(checkIfFreeUser)
    if(checkIfFreeUser === undefined){
        res.send({error:"missing a mandatory header"})
    }
    else{
        if(checkIfFreeUser === "true"){
            req.isFreeAppUser = true
        }
        else{
            req.isFreeAppUser = false
        }
        next()    
    }
}
// const checkHeader = async ( req, res, next) => {
//     let header = req.headers.isfreeuser;
//    if(!(checkIfFreeUser == "true" || checkIfFreeUser == "false"))
//     return res.send({msg:"request is missing a mandatory header"})
//     next()
// };
//module.exports.checkHeader = checkHeader

module.exports.checkFreeAppUser = checkFreeAppUser
