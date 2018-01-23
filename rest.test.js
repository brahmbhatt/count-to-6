const average = require('./rest.js');

test('Average of [1,2,3] is 2', function(){
  expect(average(1,2,3)).toBe(2);
});

test('Average of empty argument is empty', function(){
  expect(average()).toBe(NaN);
});

test('Average of [1.0,1.0,1.0]', function(){
  expect(average(1.0,1.0,1.0)).toBe(1.0);
});
