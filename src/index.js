
// You should implement your task here.

module.exports = function towelSort (matrix) {
 let result =[]
	if (matrix === undefined) {
  	return result;
  }
  else {
  	for ( let i = 0; i < matrix.length; i++) {
    	if ( i % 2 === 0 ){
      	matrix[i].forEach( val => result.push(val))
      }
 			else {
      	matrix[i].reverse().forEach( val => result.push(val))
      }
 		}
console.log(result)
return result;}
}
