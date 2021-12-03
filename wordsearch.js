const wordSearch = (matrix, word) => {
  const horizontalJoin = matrix.map((ls) => ls.join(''));
  let verticalArr = [];

  for (let col of matrix[0]) {
    verticalArr.push('');
  }
    
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      verticalArr[col] += matrix[row][col];
    }
  }

  for (let string of horizontalJoin) {
    if (string.includes(word) || string.split('').reverse().join('').includes(word)) {
      return true;
    }
  }
        
  for (let string of verticalArr) {
    if (string.includes(word) || string.split('').reverse().join('').includes(word)) {
      return true;
    }
  }
  return false;
};

let array = [
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L']
];

console.log(wordSearch(array, 'FRANK'));

module.exports = wordSearch;
//Pair programming activity done with Donny Phan