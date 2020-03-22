
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (!matrix || matrix.length <= 0) return [];

  let towelSort = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i === 0 || i % 2 === 0) {
      matrix[i].sort((a,b) => a - b);
    } else {
      matrix[i].sort((a,b) => b - a);
    }
    towelSort.push(matrix[i]);
  }

  towelSort = towelSort.join(',').split(',');
  for (let i =0; i < towelSort.length; i++) {
    towelSort[i] = +towelSort[i];
  }
  return towelSort;
}
