const co = require('co-express');
const MongoClient = require('mongodb').MongoClient;

const AppResponse  = require('./response');

function connect() {
    return  MongoClient.connect('mongodb://localhost:27017/onlineebook');
}

module.exports.getChapters = co (function * (req , res , next) {

    let db = yield connect();
    let chapters = yield db.collection("ebook").find().toArray(); 

    let response = new AppResponse();

    response.success = true;
    response.errorMessages = [];
    response.data = chapters;

    return yield Promise.resolve(response);

})