/**
 * Created by Aleksej on 20/06/17.
 */
var querystring = require("querystring");
var fs = require("fs");

function start(response, postData) {
    console.log("START was called");

    var body = '<html>' +
        '<head> '+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8"/>'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post"> '+
        '<textarea name="text" rows="20" cols="60"> </textarea> '+
        '<input type="submit" value="Submit text" /> '+
        '</form>'+
        '</body>'+
        '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, postData) {
    console.log("UPLOAD was called");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("You've sent the text: " +
    querystring.parse(postData).text);
    response.end();
}


function show(response, postData) {
    console.log("SHOW was called");
    fs.readFile("/tmp/test.png", "binary", function (error, file) {
        
    })

}


exports.start = start;
exports.upload = upload;
exports.show = show;