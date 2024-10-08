function pickingNumbers(a: number[]): number {
  let frequency = new Array(100).fill(0);

  // Step 1: Count the frequency of each element in the array
  for (let i = 0; i < a.length; i++) {
    frequency[a[i]]++;
  }

  let maxLength = 0;

  // Step 2: Check pairs of consecutive numbers (x and x+1)
  for (let i = 1; i < frequency.length; i++) {
    maxLength = Math.max(maxLength, frequency[i] + frequency[i - 1]);
  }

  return maxLength;
}
