var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/test';
const cors = require('cors')


MongoClient.connect(url, function(err, db) {

    var cursor = db.collection('users').find();

    cursor.each(function(err, doc) {

        //console.log(doc);

    });
});