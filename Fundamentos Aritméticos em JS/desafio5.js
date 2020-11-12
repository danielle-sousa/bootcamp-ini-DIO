let valor = parseInt(gets()); //distancia total percorrida
let valor2 = parseFloat(gets()).toFixed(1); // total de combustivel
let consumo = parseFloat(valor / valor2).toFixed(3); // consumo
console.log(consumo + " km/l");