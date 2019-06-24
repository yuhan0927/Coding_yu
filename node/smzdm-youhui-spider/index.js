const request = require('request');
const cheerio = require('cheerio');

request('https://www.smzdm.com/youhui/',(err, res) => {
    if (!err){
        console.log(res.body);
        const $ = cheerio.load(res.body,{
            // decodeEntities 要不要解析 html entity
            decodeEntities: false
        })
        $('.list.list_preferential ').each(function() {
            // 第二个参数限制在哪个区域内
            let title = $('.itemName a',this).html(); //html方法相当于Jquery中的html方法  innerHtml
            //<span></span>
            title = title.replace(/<.*>.*<\/.*>/g,'');
            const price = $('.listTitle .red',this).text();
            const img = $('.picLeft img',this).attr('src');
            const desc = $('.lrInfo',this).text().trim() //trim() 去除空格
            console.log({
                title,price,img,desc
            });
        })
    }
})