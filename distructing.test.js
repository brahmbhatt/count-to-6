const destructure= require('./distructing');
global.console = {
  log: jest.fn()
};
{
  let inputs = [1, 'jdoe', 'jdoe@example.com', 'John', 'Doe'];
  destructure(inputs);
  let obj ={
    username:'jdoe',
    email:'jdoe@example.com'
  };
  test('Object is created with username and email property by destructuring array',function(){
    expect(console.log).toHaveBeenCalledWith(obj);});
}
{
  let inputs = [];
  destructure(inputs);
  let obj ={};
  test('Empty object is created',function(){
    expect(console.log).toHaveBeenCalledWith(obj);});
}
{
  let inputs = [1,'rachel'];
  destructure(inputs);
  let obj ={
    username:'rachel',
    email:undefined
  };
  test('Empty object is created',function(){
    expect(console.log).toHaveBeenCalledWith(obj);});
}
