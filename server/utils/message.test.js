const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {

    it('Should generate correct message object', () => {
        const from = 'testSuite';
        const text = 'testMessage';
        const message = generateMessage(from, text);
        expect(message).toInclude({from,text});
        expect(message.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('Should generate correct location object', () => {
        const from = 'testSuite';
        const latitude = 100;
        const longitude = 200;
        const url = 'https://www.google.com/maps?q=100,200'
        const location = generateLocationMessage(from, latitude, longitude);
        expect(location).toInclude({from, url});
        expect(location.createdAt).toBeA('number');
    });
});