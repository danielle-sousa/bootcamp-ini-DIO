function clicado() {
    //alert("Obrigada por clicar!");
    document.getElementById("obrigada").innerHTML = "Obrigada por clicar!";
}

function redirect() {
    window.open("https://www.google.com/"); //abre em outra janela
}

function mudar() {
    document.getElementById("mousemuda").innerHTML = "Mudei!!"
}

function voltar() {
    document.getElementById("mousemuda").innerHTML = "Passe o mouse aqui"
}

function outroMudar(elemento) {
    elemento.innerHTML = "Mudei!!"
}

function outroVoltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui também"
}

function load() {
    alert("Página carregada!");
}

function change(elemento){
    console.log(elemento.value);
}