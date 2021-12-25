/*
 *Title: Routes.
 *Descripton: A Rest-Full Api monitor up or down time of user define links.
 *Author: Md. Monir Hossain
 *Date: 24-12-2021
 */
// dependencies
const { sampleHandler } = require('./Handlers/RouteHandlers/sampleHandlers');

const routes = {
    sample: sampleHandler,
};
module.exports = routes;
