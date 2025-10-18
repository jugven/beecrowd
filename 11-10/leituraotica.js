var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

for (let i = 0; i < lines.length; i++){
  const l = lines[i].trim();
  if (/^\d+$/.test(l)) {
    const n = Number(l);
    if (n === 0) { break;}
  
    for (let j = 0; j < n; j++){
      i++
      const line = lines[i].trim();
      verifLine(line);
    
  }
}
}

function verifLine(line) {
  const array = line.split(' ').filter(m => m !== '');
  console.log(whichLetter(array))
}

function whichLetter(array) {
  const value = { A: array[0], B: array[1], C: array[2], D: array[3], E: array[4] };
  let s = 0;
  let alternativa;
  for (const i in value) {
    if (Number(value[i]) <= 127) {
      alternativa = i;
      s = s + 1;
    }
  }
  if (s !== 1) {
    return '*';
  }
  else {
    return alternativa;
  }
}


