let read = require('./read');
let write = require('./write');
let async = require('async');
let url = 'http://top.baidu.com/buzz?b=26';

let {Movie} = require('../model');
async.waterfall([
        function (callback) {
            Movie.remove({}, callback)

        },
        function (data, callback) {
            read(url, callback)
        },
        function (movies, callback) {
            write(movies, callback);
        }
    ], function (err, result) {
        console.log('任务完成');
    }
);
