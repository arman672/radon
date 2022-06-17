//c67d015cd82213bd861c0c80afd77569
//9f4555120cd862944570224add0b7643
let axios = require("axios")

const getWeather = async function(req, res){
    try {
        let q = req.query.q
        let appid = req.query.appid
        var options = {
            method: "post",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const getTepmprature = async function(req, res){
    try {
        let q = req.query.q
        let appid = req.query.appid
        var options = {
            method: "post",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data.main.temp })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const sortCityByTemp = async function(req, res) {
    try{
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let appid = req.query.appid
        
        let tempCity = [];
        
        for(let i= 0; i<cities.length; i++) {

            let options = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${appid}`)
            tempCity[i] = {city: cities[i], temp: options.data.main.temp}
            
        } 

        sortedCity = tempCity.sort(function(a, b) {
            return a.temp - b.temp
        })
        res.status(200).send({status: true, data: sortedCity })
    }
    catch(err) {
        console.log(err)
        res.status(500).send({msg: err.message})
    }
}

module.exports.getWeather = getWeather
module.exports.getTepmprature = getTepmprature
module.exports.sortCityByTemp = sortCityByTemp