let MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/animals', { useNewUrlParser: true }, function(err, client) {
   if(err) throw err;

   let db = client.db('animals');
   db.collection('mammals').find().toArray(function(err, result) {
     if(err) throw err;
     console.log(result);
     client.close();
   });
});

// Use `create_mongo.sh` to populate the database.
