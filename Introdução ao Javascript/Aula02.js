/* AULA 02 - ARRAY E DICIONÁRIO */

/* ARRAY */
var lista = ["Maçã", "Pera", "Laranja"];
lista.push("Uva"); // inclui um novo elemento na lista
lista.pop(); // exclui o último elemento da lista  
console.log(lista);
console.log(lista[1]); // mostra o índice da lista informado, nesse caso o índice 1
console.log(lista.length);
console.log(lista.toString()); // transforma a lista em string
console.log(lista.join(" - ")); // retira a virgula e coloca outra coisa (ou nada)

/* DICIONÁRIO */
var fruta = {nome: "Maçã", cor: "vermelha"};
console.log(fruta);
console.log(fruta.cor);

var frutas = [{nome: "Uva", cor: "Roxa"},
            {nome: "Laranja", cor: "Laranja"},
            {nome: "Limão", cor: "Verde"}];
console.log(frutas);    