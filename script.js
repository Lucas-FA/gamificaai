//let menu = document.querySelector("#menu");
let menu = document.getElementById("menu");
let iconeBarras = document.getElementById("icone-barras");
let iconeX = document.querySelector("#icone-x");

function abrirFecharMenu() {
    //Se o menu está fechado
    if(menu.classList.contains("menu-fechado")) {
        //Abrir o menu
        menu.classList.remove("menu-fechado");

        //Mostrar ícone X
        iconeX.style.display = "inline";

        //Esconder ícone barras
        iconeBarras.style.display = "none";
    }
    else {
        //Fechar o menu
        menu.classList.add("menu-fechado");

        //Esconder ícone X
        iconeX.style.display = "none";

        //Mostrar ícone barras
        iconeBarras.style.display = "inline";
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado");
    iconeX.style.display = "inline";
    iconeBarras.style.display = "none";
}