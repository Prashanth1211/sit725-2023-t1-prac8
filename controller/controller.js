let model = require('../model/model');

const createBeach = (req,res) => {
    let cat = req.body;
    model.insertBeach(cat, (err, result) => {
        if (err) {
            res.json({statusCode: 400, message: err});
        } else {
            res.json({statusCode: 200, data: result, message: 'Cat Successfully Added'});
        }
    });
}

const getAllBeachs = (req,res) => {
    model.getAllBeachs((err, result) => {
        if (err) {
            res.json({statusCode: 400, message: err});
        } else {
            res.json({statusCode: 200, data: result, message: 'Successful'});
        }
    });
}

const deleteAllBeachs = (req, res) => {
    let cat = req.body;
    model.removeBeaches(cat, (err, result) => {
        if (err) {
            res.json({statusCode:400, message: err});
        } else {
            res.json({statusCode: 200, data: result, message: 'Cat successfully Deleted'});
        }
    });
};

module.exports = {createBeach, getAllBeachs, deleteAllBeachs}