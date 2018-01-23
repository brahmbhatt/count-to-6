const stringTemplate = require('./string');

test('displays the stirng with given argument', function(){
  expect(stringTemplate('margi')).toBe(`Hello, margi!
  Your name lowercased is "margi".`);
});

test('displays the stirng with given argument', function(){
  expect(stringTemplate('MARGI')).toBe(`Hello, MARGI!
  Your name lowercased is "margi".`);
});

test('displays the stirng with given argument', function(){
  expect(stringTemplate('')).toBe(`Hello, !
  Your name lowercased is "".`);
});
