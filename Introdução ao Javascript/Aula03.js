/* CONDICIONAIS, LAÇOS DE REPETIÇÃO E DATE */

/* CONDICIONAL */
var idade = prompt("Qual sua idade?"); // recebe uma informação do usuário atráves de um prompt do browser

if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};

/* LAÇOS DE REPETIÇÃO */
var count = 0;
while(count <= 5){
    console.log(count);
    count = count + 1; // ou count++
}

var cont;
for(cont=0; cont <=5; cont++){
    console.log(cont);
}

/* DATE */

var d = new Date(); // data atual
alert(d);
alert(d.getMonth()+1); // mostra o mês, como ele começa a contar do zero, é necessário add 1.
alert(d.getMinutes()); // mostra os minutos
alert(d.getDay()); // mostra o dia da semana
alert(d.getHours()); // mostra as horas

