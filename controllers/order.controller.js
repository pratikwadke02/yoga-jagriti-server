const db = require("../models");
const Order = db.order;

exports.create = async (req, res) => {
    try{
        const order = await Order.create(req.body);
        res.send(order);
    }catch(error){
        console.log(error);
    }
};

exports.findAll = async (req, res) => {
    try{
        const orders = await Order.findAll();
        res.send(orders);
    }catch(error){
        console.log(error);
    }
}

exports.findByUser = async (req, res) => {
    try{
        const order = await Order.findAll
        ({
            where: {
                userId: req.params.id
            }
        });
        res.send(order);
    }catch(error){
        console.log(error);
    }
}
