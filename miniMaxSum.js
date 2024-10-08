//https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=false

function miniMaxSum(arr) {
  arr.sort();
  let minimumSum = 0;
  let maximumSum = 0;

  for (let i = 0; i < 4; i++) {
    minimumSum = minimumSum + arr[i];
  }
  for (let j = arr.length - 4; j < arr.length; j++) {
    maximumSum = maximumSum + arr[j];
  }

  console.log(minimumSum + " " + maximumSum);
}
