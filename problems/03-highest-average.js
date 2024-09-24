/*
First, create a function called getAverage(nums) which takes a single array of
numbers and returns the average.

Then, write a function highestAverage(numsList) that takes in a
2-dimensional array of numbers and returns THE INDEX of the sub-array with the
highest average value.

Constraint: Use the getAverage function as a helper function in the
highestAverage function to solve the problem.
*/

function getAverage(nums) {
  const sum = nums.reduce((acc, num) => acc + num, 0); // This line is giving me troubles in the terminal. The syntax should be correct.
  return sum / nums.length;
}

function highestAverage(numsList) {
  let highestAvg = -Infinity;
  let highestIndex = -1;

  for (let i = 0; i < numsList.length; i++) {
    const avg = getAverage(numsList[i]); 
    if (avg > highestAvg) {
      highestAvg = avg; 
      highestIndex = i; 
    }
  }

  return highestIndex; 
}

// const arrayA = [1, 2, 3, 4, 5];
// const arrayB = [10000, -9998];
// const arrayC = [2, 100, 55, 19];
// const arrayD = [4, 8, 12];

// console.log(getAverage(arrayA)); // 3
// console.log(getAverage(arrayB)); // 1
// console.log(getAverage(arrayC)); // 44
// console.log(getAverage(arrayD)); // 8

// console.log(highestAverage([arrayA, arrayB, arrayC, arrayD])); // 2
// console.log(highestAverage([arrayA, arrayB])); // 0
// console.log(highestAverage([arrayA, arrayD])); // 1

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  getAverage,
  highestAverage,
};
