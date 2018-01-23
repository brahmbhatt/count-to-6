const greetPerson = require('./template-strings');
let name = 'Margi';
global.console = {
  log: jest.fn()
};
greetPerson(name);
let demoString = 'Hello, '+name+'!Your name lowercased is '+name.toLowerCase();
test('String is interpolated with Surabhi', () => {
  expect(console.log).toHaveBeenCalledWith(demoString);
});
