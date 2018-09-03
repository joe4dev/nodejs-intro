// Import Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Connect to MongoDB
var db = mongoose.connect('mongodb://localhost:27017/animals', { useNewUrlParser: true });

// Define Mongoose camel schema
var camelSchema = new Schema({
    color: { type: String },
    position: { type: Number }
});
// Compile model from schema
var Camel = mongoose.model('camels', camelSchema);
// Create an instance of the Camel model
var myCamel = new Camel({
  color: "orange",
  position: 3
});
// Save the model
myCamel.save(function(err) {
  if (err) { return console.log(err); }
  console.log('saved!');
});
