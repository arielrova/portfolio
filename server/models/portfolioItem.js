let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let itemSchema = new Schema({
  title: String,
  description: String
});

let item = mongoose.model("item", itemSchema);
module.exports = item;