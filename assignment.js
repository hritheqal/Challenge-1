const fs = require('fs');

function generateArray() {
  const result = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("BIGBANG");
    } else if (i % 3 === 0) {
      result.push("BIG");
    } else if (i % 5 === 0) {
      result.push("BANG");
    } else {
      result.push(i.toString());
    }
  }
  return result;
}

const output = generateArray();
fs.writeFile('output.json', JSON.stringify(output), (err) => {
  if (err) throw err;
  console.log('Output saved to output.json');
});
