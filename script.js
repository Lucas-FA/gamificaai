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

//função Carrossel

let slides = [
    "primeiro-banner",
    "segundo-banner",
    "terceiro-banner"
]

let slideAtual = 0;

let numeroSlides = slides.length;

let banner = document.querySelector(".banner");

banner.classList.add(slides[slideAtual]);

const mostrarProximoSlide = () => {
    //Remove o slide anterior
    banner.classList.remove(slides[slideAtual]);
    //Muda a posição da lista de slides, para mostrar o slideAtual
    if(slideAtual < numeroSlides - 1) {
        slideAtual++;
    } 
    else {
        slideAtual = 0;
    }
    //Renderiza o slideAtual
    banner.classList.add(slides[slideAtual]);
}

const mostrarSlideAnterior = () => {
    //Remove o slide anterior
    banner.classList.remove(slides[slideAtual]);
    if(slideAtual > 0) {
        slideAtual--;
    } 
    else {
        slideAtual = numeroSlides - 1;
    }
    //Renderiza o slideAtual
    banner.classList.add(slides[slideAtual]);
}