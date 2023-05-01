var express = require('express');
let router = express.Router();
let controller = require('../controller/controller');

router.post('/api/beaches', (req, res) => {
    controller.createBeach(req,res);
});

router.get('/api/beaches',(req,res) => {
    controller.getAllBeachs(req,res);
});

router.delete('/api/beaches',(req,res) => {
    controller.deleteAllBeachs(req,res);
});
module.exports = router;