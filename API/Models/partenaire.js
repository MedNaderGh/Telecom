const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Partenaire = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
 Adress: {
    type: String,
    required: true
  },
  img: {
    type: String,
  },
  description: {
    type: String,
  },
  siteweb: {
    type: String,
  }
},{
    collection: 'partenaire'
});
module.exports = mongoose.model('Partenaire', Partenaire);