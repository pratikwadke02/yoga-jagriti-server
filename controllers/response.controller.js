const db = require('../models');
const Response = db.response;

exports.create = async (req, res) => {
    console.log(req.body);
    Response.create(req.body).then(data => {
        res.send(
            {
                message: "Response created successfully",
            }
        );
    }).catch(err => {
        res.send(err);
        console.log(err);
    });
}

exports.findAll = async (req, res) => {
    Response.findAll().then(data => {
        console.log(data);
        res.send(data);
    }).catch(err => {
        res.send(err);
        console.log(err);
    }
    );
}