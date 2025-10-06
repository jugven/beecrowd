function coordenada(k) {
  let coordenadas = [];
  for (let i = 0; i <= k; i++) {
    let txt = prompt("Coloque coordenadas divididas por espaco, a primeira coordenada será o ponto de divisão: ");
    let num = txt.split(" ");
    let x = parseInt(num[0]);
    let y = parseInt(num[1]);
    if (x > 10**4 || x < -(10**4) || y > 10**4 || y < -(10**4)){
      console.log("As coordenadas devem estar entre 10^-4 e 10^4");
      return;}
    else{coordenadas.push({ x: x, y: y });}
  }

  return coordenadas
}


function resultado(coord) {
  let n = coord[0].x;
  let m = coord[0].y;

  coord.forEach(function (v, indice) {
    if (indice != 0) {
      if (v.x == n || v.y == m) { console.log("divisa") }
      else if (v.x > n) {
        if (v.y > m) { console.log("NE") }
        else if (v.y < m) { console.log("SE") }
      }
      else if (v.x < n) {
        if (v.y > m) { console.log("NO") }
        else if (v.y < m) { console.log("SO") }
      }
    }
  })

}



let num = parseInt(prompt("numero de consultas, digite 0 para sair: "))
while (num !== 0){
   resultado(coordenada(num));
   num = parseInt(prompt("numero de consultas, digite 0 para sair: "))
}
// if (num > 0 || num < 10**3){
//   resultado(coordenada(num));
// } else{
//   console.log("numero de repetiçoes deve ser < 10^3")
// }