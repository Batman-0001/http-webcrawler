const { sortPages } = require("./report.js");
const {test, expect} = require("@jest/globals");

test('sortPages 2 pages', () => {
    const input = {
        'https://wagslane.dev': 3,
        'https://wagslane.dev/path': 13
    };
    const actual = sortPages(input);
    const expected = [
        ['https://wagslane.dev/path', 13],
        ['https://wagslane.dev', 3]
    ];
    expect(actual).toEqual(expected);
})

test('sortPages 5 pages', () => {
    const input = {
        'https://wagslane.dev': 3,
        'https://wagslane.dev/path': 13,
        'https://wagslane.dev/path2': 23,
        'https://wagslane.dev/path3': 43,
        'https://wagslane.dev/path4': 33
    };
    const actual = sortPages(input);
    const expected = [
        ['https://wagslane.dev/path3', 43],
        ['https://wagslane.dev/path4', 33],
        ['https://wagslane.dev/path2', 23],
        ['https://wagslane.dev/path', 13],
        ['https://wagslane.dev', 3]
    ];
    expect(actual).toEqual(expected);
})