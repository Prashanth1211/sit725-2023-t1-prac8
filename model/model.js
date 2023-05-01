let client = require('../dbConnection');
let collection = client.db('test').collection('Cats');

function insertBeach(cat, callback) {
    collection.insertOne(cat, callback);
}

function getAllBeachs(callback){
    collection.find().toArray(callback);
}

function removeBeaches(beach, callback) {
    collection.deleteOne(beach, callback);
}

module.exports = {insertBeach, getAllBeachs, removeBeaches}