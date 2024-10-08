//https://www.hackerrank.com/challenges/library-fine/problem?isFullScreen=false

function libraryFine(d1, m1, y1, d2, m2, y2) {
  // Write your code here
  // Case 1: Returned on or before the due date
  if (
    y1 < y2 ||
    (y1 === y2 && m1 < m2) ||
    (y1 === y2 && m1 === m2 && d1 <= d2)
  ) {
    return 0;
  }

  // Case 2: Returned in the same month and year
  if (y1 === y2 && m1 === m2 && d1 > d2) {
    return 15 * (d1 - d2);
  }

  // Case 3: Returned in the same year but after the due month
  if (y1 === y2 && m1 > m2) {
    return 500 * (m1 - m2);
  }

  // Case 4: Returned after the due year
  if (y1 > y2) {
    return 10000;
  }

  return 0; // Default case if none of the above match
}
