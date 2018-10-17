const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('Should generate correct message object', () => {
        let from = 'testSuite';
        let text = 'testMessage';
        let message = generateMessage(from, text);
        expect(message).toInclude({from,text});
        expect(message.createdAt).toBeA('number');
    })
});