var express = require('express');
let router = express.Router();
let controller = require('../controller/controller');

router.post('/api/beaches', (req, res) => {
    controller.createCat(req,res);
});

router.get('/api/beaches',(req,res) => {
    controller.getAllCats(req,res);
});

router.delete('/api/beaches',(req,res) => {
    controller.deleteAllCats(req,res);
});
module.exports = router;