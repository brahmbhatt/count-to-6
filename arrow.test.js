const arrow = require('./arrow');

test('displays the stirng made of array element\'s first char :', function(){
  expect(arrow(['margi','brahmbhatt'])).toBe('[margi,brahmbhatt] becomes "mb"');
});

test('displays the stirng made of array element\'s first char :', function(){
  expect(arrow([])).toBe('[] becomes ""');
});
test('displays the stirng made of array element\'s first char :', function(){
  expect(arrow(['brahmbhatt'])).toBe('[brahmbhatt] becomes "b"');
});
