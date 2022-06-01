
const printDate= function(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    return dd;
}
const printMonth= function(){
    var currentMonth = new Date();
    let mm = String(currentMonth.getMonth()).padStart(2, '0');
    return mm;
}
const getBatchInfo= function(){
    const msg = "Radon, W3D1, the topic for today was nodejs module system."
    return msg;
}
module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo