const str = "   Its been 3 weeks and 2 day at FunctionUp "

const trim = function(){
    return str.trim();
}

const lCase = function(){
    return str.toLowerCase();
}

const uCase = function(){
    return str.toUpperCase();
}

module.exports.str = str
module.exports.trim = trim
module.exports.lCase = lCase
module.exports.uCase = uCase
