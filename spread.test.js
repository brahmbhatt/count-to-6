const spreadDemo = require('./spread.js');
global.console = {
  log: jest.fn()
};
{
  let array1 = [1,2,3,5,6];
  spreadDemo(array1);
  test('Minimum of [1,2,3,5,6] is 1', () => {
    expect(console.log).toHaveBeenCalledWith(`The minimum of [${array1}] is 1`);
  });
}
{
  let array1 = [];
  spreadDemo(array1);
  test('Minimum of empty array is not defined', () => {
    expect(console.log).toHaveBeenCalledWith(`The minimum of [${array1}] is Infinity`);
  });
}
