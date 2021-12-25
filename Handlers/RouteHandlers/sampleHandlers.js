/*
 *Title: sample Handlers.
 *Descripton: A Rest-Full Api monitor up or down time of user define links.
 *Author: Md. Monir Hossain
 *Date: 24-12-2021
 */

// module - scaffuling
const handler = {};
handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(200, {
        message: 'This is a sample url',
    });
};
module.exports = handler;
