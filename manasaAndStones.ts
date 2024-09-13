//https://www.hackerrank.com/challenges/manasa-and-stones/problem?isFullScreen=true

function stones(n: number, a: number, b: number): number[] {
  // Write your code here
  let result: Set<number> = new Set();

  for (let i = 0; i < n; i++) {
    let lastStone = i * a + (n - 1 - i) * b;
    result.add(lastStone);
  }
  // Convert the set to an array and sort it in ascending order
  return Array.from(result).sort((x, y) => x - y);
}
