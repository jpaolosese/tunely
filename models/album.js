var mongoose = require("mongoose");
var song = require('./song.js')
var Schema = mongoose.Schema;

var AlbumSchema = new Schema({
  artistName: String,
  name: String,
  releaseDate: String,
  genres: [ String ],
  songs : [ song.schema ]
});

var Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
