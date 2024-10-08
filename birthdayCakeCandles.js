function birthdayCakeCandles(ar) {
  let tallestCandle = 0;
  let tallestCandlesCount = 0;

  // Step 1: Find the height of the tallest candle
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > tallestCandle) {
      tallestCandle = ar[i];
    }
  }

  // Step 2: Count how many candles have the tallest height
  for (let j = 0; j < ar.length; j++) {
    if (ar[j] === tallestCandle) {
      tallestCandlesCount++;
    }
  }

  return tallestCandlesCount;
}
