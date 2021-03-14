
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];

  let array = [];

  matrix.forEach( (el, i) => {
  	if (i % 2 === 1) el.reverse();
    	
    array.push(...el);
  });

  return array;
}
