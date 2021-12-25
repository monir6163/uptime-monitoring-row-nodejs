/*
 *Title: not Found Handlers.
 *Descripton: A Rest-Full Api monitor up or down time of user define links.
 *Author: Md. Monir Hossain
 *Date: 24-12-2021
 */

// module - scaffuling
const handler = {};
handler.notFoundHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(404, {
        message: 'This url was not found',
    });
};
module.exports = handler;
