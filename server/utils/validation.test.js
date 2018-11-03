const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('Should reject non-string values', () => {
        let test = isRealString(100);
        expect(test).toBe(false);
    });

    it('Should reject string with only spaces', () => {
        let test2 = isRealString('      ');
        expect(test2).toBe(false);
    });

    it('Should allow strings with non-spaces characters', () => {
        let test3 = isRealString('  TEST STRING  ');
        expect(test3).toBe(true);
    });
});