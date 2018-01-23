// function makeImportant(string,number=string.length) {
//   return `${string}${'!'.repeat(number)}`
// }
// module.exports = makeImportant
module.exports = (str, num = str.length) => `${str}${'!'.repeat(num)}`;
