const http =require('http');

// 解析请求的第三方包   npm i formidable -S
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    if (req.url === '/upload' && req.method.toLowerCase() === 'post'){
        // 解析文件
        const form = new formidable.IncomingForm(); //生成一个form实例
        form.uploadDir = './static/'; //指定放文件的目录
        form.parse(req, (err, fields, files) => { //解析请求
            console.log(fields, files);
            // <input type="file" name="upload"></input>
            const oldPath = files.upload.path;
            const fileName = files.upload.name;
            // static\\upload_0146da764772dfd8614d64dce766a191
            const dirname = path.dirname(oldPath);
            //dirname === static/
            const newPath = path.join(dirname, fileName);
            fs.rename(oldPath, newPath, (err) => {
                res.writeHead(200,{
                'Content-Type': 'text/html;charset=utf8'
            });
            res.end('文件上传完毕');
            })    
        })
        return false;
    }
    res.writeHead(200,{
        'Content-Type': 'text/html;charset=utf8'
    });
    res.end(
        `
        <form action="/upload" method="POST" enctype="multipart/form-data">  <!--action请求的路径     enctype="multipart/form-data" 专门用来处理文件发送内容的编码-->
        <input type="file" name="upload">
        <input type="text" name="nickname">
        <input type="submit" value="submit">
        </form>
        `
    )
}).listen(8080,() => {
    console.log('server is running port 8080')
})