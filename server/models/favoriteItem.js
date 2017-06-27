var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FavoriteItem = new Schema({
  jsonFilm: {
    type: Object,
    default: '',
    trim: true
  },
  statusFavorite: {
    type: Boolean,
    default: true
  }
  // id: {
  //   type: Number,
  //   default: '',
  //   trim: true
  // },
  // name: {
  //   type: String,
  //   default: '',
  //   trim: true 
  // },
  // poster_path: {
  //   type: String,
  //   default: '',
  //   trim: true
  // },
  // title: {
  //   type: String,
  //   default: '',
  //   trim: true
  // },
  // tagline: {
  //   type: String,
  //   default: '',
  //   trim: true
  // },
  // overview: {
  //   type: String,
  //   default: '',
  //   trim: true
  // },
  // backdrop_path: {
  //   type: String,
  //   default: '',
  //   trim: true
  // },
  // budget: {
  //   type: String,
  //   default: '',
  //   trim: true
  // },
  // homepage: {
  //   type: String,
  //   default: '',
  //   trim: true
  // },
  // imdb_id: {
  //   type: String,
  //   default: '',
  //   trim: true
  // },
  // popularity: {
  //   type: String,
  //   default: '',
  //   trim: true
  // },
  // release_date: {
  //   type: Date,
  //   default: Date.now
  // },
  // runtime: {
  //   type: Number,
  //   default: '',
  //   trim: true
  // },
  // status: {
  //   type: String,
  //   default: '',
  //   trim: true
  // },
  // vote_average: {
  //   type: Number,
  //   default: '',
  //   trim: true
  // },
  // vote_count: {
  //   type: Number,
  //   default: '',
  //   trim: true
  // },
  // genres: {
  //   type: Array,
  //   default: '',
  //   trim: true
  // },
  // production_companies: {
  //   type: Array,
  //   default: '',
  //   trim: true
  // },
  // production_countries: {
  //   type: Array,
  //   default: '',
  //   trim: true
  // },
  // spoken_languages: {
  //   type: Array,
  //   default: '',
  //   trim: true
  // }
});

module.exports = mongoose.model('FavoriteItem', FavoriteItem);


