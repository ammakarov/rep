/**
 * Created by Aleksej on 20/06/17.
 */

var exec = require("child_process").exec;

function start(response) {
    console.log("START was called");

    exec("ls -lah", function (error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
    });
}

function upload(response) {
    console.log("UPLOAD was called");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello UPload");
    response.end();
}

exports.start = start;
exports.upload = upload;