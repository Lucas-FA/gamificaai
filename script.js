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

const selecionarSlide = (indiceSlide) => {
    //p/ cada item do array (remove o item da classe do banner)
    slides.forEach(slide => banner.classList.remove(slide));
    slideAtual = indiceSlide;
    banner.classList.add(slides[indiceSlide]);
}

let listaCases = [
    {
        imagem: "https://unsplash.it/600/400?image=40",
        descricao: "Uma empresa de tecnologia lança um desafio de gamificação onde os funcionários devem propor e implementar ideias inovadoras."
    },

    {
        imagem: "https://unsplash.it/600/400?image=14",
        descricao: "Uma empresa de consultoria cria uma narrativa interativa de gamificação para seu programa de treinamento."
    },

    {
        imagem: "https://unsplash.it/600/400?image=666",
        descricao: "Uma empresa de vendas implementa uma competição gamificada entre equipes que competem pelo topo do ranking."
    },

    {
        imagem: "https://unsplash.it/600/400?image=28",
        descricao: "Uma empresa promove o bem estar dos funcionários através de um desafio de gamificação de condicionamento físico."
    }
]

const renderizarCases = () => {
    let elementoLista = document.getElementById("lista-cards");

    //Template Strings
    let template = ""

    listaCases.forEach(cardCase => {
        template += `<div class="card">
            <img src="${cardCase.imagem}" alt="">
            <p>${cardCase.descricao}</p>
            <button>Ver mais</button>
        </div>`
    })

    elementoLista.innerHTML = template;
}