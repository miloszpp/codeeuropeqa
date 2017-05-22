"use strict";
exports.__esModule = true;
var config_1 = require("../src/common/config");
var request = require('request');
module.exports = function (context, callback) {
    var command = context.body;
    var question = {
        content: command.content,
        timestamp: Date.now()
    };
    var spellCheckRequest = {
        method: 'POST',
        headers: { 'user-agent': 'codeeurope-webtask' },
        form: { key: 'angwarsaw123456789', data: question.content },
        url: "http://service.afterthedeadline.com/checkDocument"
    };
    request(spellCheckRequest, function (error, response, body) {
        if (body.indexOf("error") >= 0) {
            callback("The question is not correctly spelled");
        }
        else {
            var addQuestionRequest = {
                method: 'POST',
                url: config_1.config.firebase.databaseURL + "/questions.json",
                json: question
            };
            request(addQuestionRequest, function () { return callback(null, "Finished"); });
        }
    });
};
