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

let listaCases = []

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

const carregarCases = () => {
    // Método HTTP GET - Read -> Leitura
    fetch("http://localhost:3000/cases")
    .then((resposta) => resposta.json())
    .then((dados) => {
        listaCases = dados
        renderizarCases()
    })
    .catch( erro => console.error(erro))
}

const solicitarOrcamento = (event) => {
    // Pegar valores dos inputs
    let valorNome = document.getElementById("campo-nome").value;
    let valorEmail = document.getElementById("campo-email").value;
    let valorDescricao = document.getElementById("campo-descricao").value;

    // Organizar objeto com os valores
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    // Enviar requisicao para a api
    // 127.0.0.1 = localhost
    // Método HTTP POST - Create -> Cadastrar ou criar 
    fetch("http://127.0.0.1:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    .then(resposta => {
        console.log(resposta);
        
        // Limpar os campos
        document.querySelector("#contato form").reset();

        // Mostrar alert com msg de sucesso
        alert("Solicitação cadastrada");
    })
    .catch(erro => {
        // CASO ERRO - alert com msg erro
        console.error(erro);
        alert("Erro na requisição");
    })
        
    event.preventDefault();
}