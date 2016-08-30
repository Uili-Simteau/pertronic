const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PanelSchema = new Schema({
  name: String
});
module.exports = mongoose.model('Panel', PanelSchema)