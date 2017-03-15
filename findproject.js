var mongo = require('mongodb').MongoClient

var age = parseInt(process.argv[2]);
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
  if (err) throw err
  var parrots = db.collection('parrots');

  parrots.find({
    age: {
      $gt: +age
      }
    }, {
      name: 1
    , age: 1
    , _id: 0
  }).toArray(function(err, data) {
      if (err) throw err
      console.log(data);
      db.close();
    })


})
