function spreadDemo(array1){
  let min1 = Math.min(...array1);
  console.log(`The minimum of [${array1}] is ${min1}`);
}

module.exports = spreadDemo;
// let numbers = process.argv.slice(2);
//
// let min = Math.min(...numbers);
//
// console.log(`The minimum of [${numbers}] is ${min}`);
