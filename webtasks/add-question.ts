import { config } from '../src/common/config';
import { AddQuestionCommand, Question } from '../src/common/model';

var request = require('request');

module.exports = function (context, callback) {
    const command = <AddQuestionCommand>context.body;        
    const question: Question = {
        content: command.content,
        timestamp: Date.now()
    };
    const spellCheckRequest = {
        method: 'POST',
        headers: { 'user-agent': 'codeeurope-webtask' },
        form: { key: 'angwarsaw123456789', data: question.content },
        url: "http://service.afterthedeadline.com/checkDocument"
    };

    request(spellCheckRequest, function (error, response, body) {
        if (body.indexOf("error") >= 0) {
            callback("The question is not correctly spelled");
        } else {
            const addQuestionRequest = {
                method: 'POST',
                url: `${config.firebase.databaseURL}/questions.json`,
                json: question
            };
            request(addQuestionRequest, () => callback(null, "Finished"));
        }
    });
}

