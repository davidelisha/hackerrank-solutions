//https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=false

function kangaroo(x1, v1, x2, v2) {
  let numberOfJumps = 0;

  if (x1 < x2) {
    if (v2 >= v1) return "NO";

    while (x1 < x2) {
      x1 += v1;
      x2 += v2;
      numberOfJumps++;
    }

    if (x1 === x2) return "YES";

    return "NO";
  } else if (x2 < x1) {
    if (v1 >= v2) return "NO";

    while (x2 < x1) {
      x1 += v1;
      x2 += v2;
      numberOfJumps++;
    }

    if (x2 === x1) return "YES";

    return "NO";
  }
}
