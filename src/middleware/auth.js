const jwt = require("jsonwebtoken");
const authenticate = function (req, res, next) {
   try {
      let token = req.headers["x-Auth-token"];
      if (!token) token = req.headers["x-auth-token"];
      if (!token) return res.status(400).send({ status: false, msg: "token must be present" });
      console.log(token);
      try {
         let decodedToken = jwt.verify(token, "functionup-radon");
         if (!decodedToken)
            return res.status(403).send({ status: false, msg: "token" });
         next()
      }
      catch (err) {
         res.status(403).send({ msg: "Error", error: err.message })
      }
   }
   catch (err) {
      res.status(500).send({ msg: "Error", error: err.message })
   }
}

const authorise = function (req, res, next) {
   try {
      let token = req.headers["x-auth-token"]
      let decodedToken = jwt.verify(token, 'functionup-radon')

      if (!decodedToken) return res.status(400).send({ status: false, msg: "token is not valid" })

      //userId for which the request is made. In this case message to be posted.
      let userToBeModified = req.params.userId
      //userId for the logged-in user
      let userLoggedIn = decodedToken.userId

      //console.log(1/a)

      //userId comparision to check if the logged-in user is requesting for their own data
      if (userToBeModified != userLoggedIn) return res.status(403).send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })

      next()
   }
   catch (err) {
      res.status(500).send({ msg: "Error", error: err.message })
   }
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise