function average(...args) {
  return args.reduce( (sum, x) => sum + x, 0) / args.length;
}
module.exports = average;

// module.exports = function average(...args) {
//   return args.reduce( (sum, x) => sum + x, 0) / args.length;
// };
