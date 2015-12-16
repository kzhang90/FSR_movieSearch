var mongoose = require("mongoose");

var schema = new mongoose.Schema({ title: 'string'});
module.exports = mongoose.model("Movie", schema);