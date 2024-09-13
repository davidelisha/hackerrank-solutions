//https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?isFullScreen=true

function designerPdfViewer(h, word) {
  // Write your code here
  const alphbts = "abcdefghijklmnopqrstuvwxyz";
  let max = 0;
  for (const l of word) {
    console.log(h[alphbts.indexOf(l)]);
    max = Math.max(max, h[alphbts.indexOf(l)]);
  }
  console.log(max);
  return max * word.length;
}
