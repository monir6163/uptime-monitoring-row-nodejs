/*
 *Title: Handle Request Response.
 *Descripton: A Rest-Full Api monitor up or down time of user define links.
 *Author: Md. Monir Hossain
 *Date: 24-12-2021
 */

// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../Handlers/RouteHandlers/notFoundHandlers');
// module scaffolding
const handler = {};
handler.hanldeReqres = (req, res) => {
    // handle response
    // get the url and parse it
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const trimedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parseUrl.query;
    const headersObject = req.headers;
    const requestProperties = {
        parseUrl,
        path,
        trimedPath,
        method,
        queryStringObject,
        headersObject,
    };
    const decoder = new StringDecoder('utf-8');
    let realData = '';
    const choosenHandler = routes[trimedPath] ? routes[trimedPath] : notFoundHandler;
    choosenHandler(requestProperties, (statusCode, payload) => {
        statusCode = typeof statusCode === 'number' ? statusCode : 500;
        payload = typeof payload === 'object' ? payload : {};
        const payloadString = JSON.stringify(payload);
        res.writeHead(statusCode);
        res.end(payloadString);
    });
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });
    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        res.end('Hello World');
    });
};

module.exports = handler;
