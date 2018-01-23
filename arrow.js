// let arr = process.argv.slice(2);
// let result = inputs.map( x => x[0] )
//                     .reduce( (memo, x) => memo + x, '' );
// console.log(`[${arr}] becomes "${result}"`);


module.exports =function arrow(arr)
{
  let result = arr.map( x => x[0] )
    .reduce( (pre, x) => pre + x, '' );
  return(`[${arr}] becomes "${result}"`);
};

//arrow(['margi', 'brahmbhatt']);
