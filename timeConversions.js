//https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=false

function timeConversion(s) {
  // Write your code here

  const match = s.match(/^(\d+):(\d+):(\d+)\s*([APMapm]{2})$/);

  if (!match) return "Invalid time";

  let hrs = parseInt(match[1], 10);

  const mins = match[2];
  const secs = match[3];
  const period = match[4].toUpperCase();

  if (period === "PM" && hrs !== 12) {
    //Convert PM hours to 24-hour format
    hrs += 12;
  } else if (period === "AM" && hrs === 12) {
    //Handle midnight (12:00 AM) case
    hrs = 0;
  }

  const hrs24 = hrs.toString().padStart(2, "0");

  return `${hrs24}:${mins}:${secs}`;
}
