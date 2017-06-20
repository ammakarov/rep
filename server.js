/**
 * Created by Aleksej on 20/06/17.
 */

var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.")

        route(handle, pathname, response);
    }

    http.createServer(onRequest).liisten(8080);
    console.log("Server has started");
}

exports.start = start;