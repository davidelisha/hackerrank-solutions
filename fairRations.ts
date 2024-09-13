// https://www.hackerrank.com/challenges/fair-rations/problem?isFullScreen=true

function fairRations(B: number[]): string {
  // Write your code here
  let rations = 0;

  for (let i = 0; i < B.length - 1; i++) {
    if (B[i] % 2 !== 0) {
      B[i]++;
      B[i + 1]++;
      rations += 2;
    }
  }

  // If the last person still has an odd number of loaves, we return "NO"
  if (B[B.length - 1] % 2 !== 0) {
    return "NO";
  }

  return rations.toString();
}
