const makeImportant = require('./default-arguments-part2.js');

test('Hi!!!!! will be printed', function(){
  expect(makeImportant('Hi',5)).toBe('Hi!!!!!');
});
test('Hello!!!!! will be printed', function(){
  expect(makeImportant('Hello')).toBe('Hello!!!!!');
});
test('Hello!!!!! will be printed', function(){
  expect(makeImportant('Hello',undefined)).toBe('Hello!!!!!');
});
