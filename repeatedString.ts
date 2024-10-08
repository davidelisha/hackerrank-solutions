//https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=false

function repeatedString(s: string, n: number): number {
  // Write your code here
  const ains = s.split("a").length - 1;
  const ainsLastTime = s.slice(0, n % s.length).split("a").length - 1;
  if (n % s.length === 0) {
    return ains * (n / s.length);
  }
  return ains * Math.floor(n / s.length) + ainsLastTime;
}
