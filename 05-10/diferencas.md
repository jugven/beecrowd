A diferença principal entre os arquivos foi a forma de entrada de dados, a lógica das funções se manteve a mesma. Pelo Beecrowd, o programa deve receber um arquivo, ler ele e simular a entrada de dados como se fossem inputs.

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n'); 
-> le todo o aqruivo, remove as linhas em branco do fim e começo e separa os paragrafos num array ('input')

index = 0 
-> inicia o indice que controla a posição do array

let num = parseInt(input[index++]);
-> pega o primeiro numero do arquivo, que representa o numero de consultas das coordenadas e agora o index = 1

while (num !== 0) {
  resultado(coordenada(num, input.slice(index)));
-> realiza a função do array do indice 1 do input até o final (a linha 0 é o num de consultas), faz isso num vezes
  index += num + 1;
-> o indice agora é o indice atual + numero de entradas + 1(ponto divisor)
  num = parseInt(input[index++]);
-> aponta para o proximo bloco de entrada
}




