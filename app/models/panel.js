const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PanelSchema = new Schema({
  name: String
});
module.exports = mongoose.model('Panel', PanelSchema)