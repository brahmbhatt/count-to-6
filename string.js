// let name = process.argv[2];
// let lowercaseName = name.toLowerCase();
//
// console.log(`Hello, ${name}!
// Your name lowercased is "${lowercaseName}".`);

module.exports = function stringTemplate(name)
{
  let lowercaseName = name.toLowerCase();
  return `Hello, ${name}!
  Your name lowercased is "${lowercaseName}".`;
};
