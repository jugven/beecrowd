const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

let index = 0;

function coordenada(k, linhas) {
  let coordenadas = [];
  for (let i = 0; i <= k; i++) { // mantém seu <= k
    let txt = linhas[i];
    let num = txt.split(" ");
    let x = parseInt(num[0]);
    let y = parseInt(num[1]);
    if (x > 10**4 || x < -(10**4) || y > 10**4 || y < -(10**4)) {
      return; // mantém seu return original
    } else {
      coordenadas.push({ x: x, y: y });
    }
  }
  return coordenadas;
}

function resultado(coord) {
  let n = coord[0].x;
  let m = coord[0].y;

  coord.forEach(function (v, indice) {
    if (indice != 0) {
      if (v.x == n || v.y == m) { console.log("divisa"); }
      else if (v.x > n) {
        if (v.y > m) { console.log("NE"); }
        else if (v.y < m) { console.log("SE"); }
      }
      else if (v.x < n) {
        if (v.y > m) { console.log("NO"); }
        else if (v.y < m) { console.log("SO"); }
      }
    }
  });
}

let num = parseInt(input[index++]); // número de consultas

while (num !== 0) {
  resultado(coordenada(num, input.slice(index)));
  index += num + 1; // pula o ponto divisor + k linhas
  num = parseInt(input[index++]);
}
