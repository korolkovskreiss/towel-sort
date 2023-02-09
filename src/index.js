
// You should implement your task here.

module.exports = function towelSort (matrix) {
   let result =[]
 for ( let i = 0; i < matrix.length; i++) {
 		matrix[i].forEach( val => result.push(val))
 }
return result
}
