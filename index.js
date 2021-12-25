/*
 *Title: Uptime Monitoring Application.
 *Descripton: A Rest-Full Api monitor up or down time of user define links.
 *Author: Md. Monir Hossain
 *Date: 24-12-2021
 */
// dependencies
const http = require('http');
const { hanldeReqres } = require('./Helpers/helper');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.hanldeReqres);
    server.listen(app.config.port, () => {
        console.log(`Liseting to port no ${app.config.port}`);
    });
};

// handle req-res
app.hanldeReqres = hanldeReqres;

// start node server
app.createServer();
