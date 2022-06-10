
const basicCode= async function(req, res) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    }

//===============================================================================

const test= async function (req, res) {
    res.send({msg:"Hello"})
}

const test1= async function (req, res) {
    res.send({msg:"Hello"})
}

const test2= async function (req, res) {
    res.send({msg:"Hello"})
}

module.exports.test = test
module.exports.test1 = test1  
module.exports.test2 = test2
module.exports.basicCode = basicCode
