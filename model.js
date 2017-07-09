let mongoose = require('mongoose');
let conn = mongoose.createConnection('mongodb://127.0.0.1/201703crawl');
mongoose.Promise = Promise;
exports.Movie = conn.model('Movie', new mongoose.Schema({
    name: String,
    url: String
}));

