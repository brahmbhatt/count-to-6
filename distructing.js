function destructure(numbers){
  let result = {};
  [, result.username, result.email] = numbers;
  console.log(result);
}
module.exports = destructure;
