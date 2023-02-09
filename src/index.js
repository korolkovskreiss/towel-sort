
// You should implement your task here.

module.exports = function towelSort (matrix) {
 let result =[]
	if (matrix === undefined) {
  	return result;
  }
  else {
  	for ( let i = 0; i < matrix.length; i++) {
 			matrix[i].forEach( val => result.push(val))
 		}
result.sort((a,b) => a - b)
return result;}
}
