var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Song = new Schema({
  name: String,
  trackNumber: Number
})
