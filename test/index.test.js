const { hello, shout } = require('../index.js');

describe('hello()', () => {
    test('should returns a personalized greeting', () => {
        expect(hello('Alice')).toBe('Hello, Alice!');
    });

    test('shouldn\'t return a greet for the wrong name', () => {
        expect(hello('Alice')).not.toBe('Hello, Bob!');
    });

    test('shouldn\'t return a falsy value when provided a name', () => {
        expect(hello('Alice')).not.toBeFalsy();
    });
});

describe('shout()', () => {
    test('should converts a word to uppercase and adds exclamation marks', () => {
        expect(shout('success')).toBe('SUCCESS!!!');
    });

    test('shouldn\'t leave a word in lowercase', () => {
        expect(shout('success')).not.toBe('success!!!');
    });
});
