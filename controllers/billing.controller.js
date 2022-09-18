const db = require('../models');
const Billing = db.billing;

exports.create = async (req, res) => {
    try{
        const billing = await Billing.create(req.body);
        console.log(billing.id);
        res.send(billing);
    }catch(error){
        console.log(error);
    }
}