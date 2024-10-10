//https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=false

function breakingRecords(scores) {
  let minimiumRecord = scores[0];
  let maximiumRecord = scores[0];
  let highScoreCount = 0;
  let lowScoreCount = 0;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > maximiumRecord) {
      maximiumRecord = scores[i];
      highScoreCount++;
    } else if (scores[i] < minimiumRecord) {
      minimiumRecord = scores[i];
      lowScoreCount++;
    }
  }
  return [highScoreCount, lowScoreCount];
}
