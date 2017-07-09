let request = require('request');
let iconv = require('iconv-lite');
let cheerio = require('cheerio');
//model = 模型 module = 模块
module.exports = function (url, callback) {
    request({url, encoding: null}, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            body = iconv.decode(body, 'GBK');
            let $ = cheerio.load(body);
            //可以迭代所有的a标签 拥有keyword类下面的list-title类的a标签
            //得到的是一个集合，可以通过each进行循环迭代 index索引 item是每个元素
            let movies = [];
            $('.keyword a.list-title')
                .each(
                    function (index, item) {
                        let $this = $(item);
                        let movie = {
                            name: $this.text(),
                            url: $this.attr('href'), //获取属性 getAttribute()
                        };
                        console.log(`读到电影:${movie.name}`);;
                        movies.push(movie)
                    }
                );
            callback(err, movies)
        }
    });
};

let url = 'http://top.baidu.com/buzz?b=26';
module.exports(url, function (err, movies) {
    console.log(movies);
});
