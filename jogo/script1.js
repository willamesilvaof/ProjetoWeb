const container = document.querySelector(".container");
const botaoReiniciar = document.querySelector("#reiniciar");
let cartas;
let primeiraCarta = null;
let segundaCarta = null;


const itens = [
    { nome: "andrew", imgs: "imgs/andrew.jpg" },
    { nome: "arthur", imgs: "imgs/arthur.jpg" },
    { nome: "emilly", imgs: "imgs/emy.jpg" },
    { nome: "gabriel", imgs: "imgs/gab.jpg" },
    { nome: "julia", imgs: "imgs/julia.jpg" },
    { nome: "willame", imgs: "imgs/will.jpg" },
    { nome: "pedro", imgs: "imgs/pl.jpg" },
    { nome: "rayane", imgs: "imgs/ray.jpg" },
];


botaoReiniciar.addEventListener("click", reiniciarJogo);

function reiniciarJogo() {
    primeiraCarta = null;
    segundaCarta = null;
    cartas = document.querySelectorAll(".carta-virada");
    cartas.forEach(carta => carta.classList.remove("carta-virada"));
    criarCartas(); 
}

function criarCartas() {
    let cartasDuplicadas = [...itens, ...itens]; 
    cartasDuplicadas.sort(() => Math.random() - 0.5); 

    container.innerHTML = ""; 

    cartasDuplicadas.forEach((pessoa) => {
        container.innerHTML += `
            <div class="carta" data-carta="${pessoa.nome}">
                <div class="atras">?</div>
                <div class="frente">
                    <img src="${pessoa.imgs}" width="150px" height="150px" /> <!-- Ajuste do tamanho da imagem -->
                </div>
            </div>`;
    });

    
    viraCarta();
}

function viraCarta() {
    cartas = document.querySelectorAll(".carta");

    cartas.forEach((carta) => {
        carta.addEventListener("click", () => {
            if (carta.classList.contains("carta-virada") || segundaCarta) return;

            carta.classList.add("carta-virada");

            if (!primeiraCarta) {
                primeiraCarta = carta;
            } else {
                segundaCarta = carta;
                checarCarta();
            }
        });
    });
}

function checarCarta() {
    const primeiraPessoa = primeiraCarta.getAttribute("data-carta");
    const segundaPessoa = segundaCarta.getAttribute("data-carta");

    if (primeiraPessoa === segundaPessoa) {
        
        primeiraCarta = null;
        segundaCarta = null;
    } else {
        
        setTimeout(() => {
            primeiraCarta.classList.remove("carta-virada");
            segundaCarta.classList.remove("carta-virada");
            primeiraCarta = null;
            segundaCarta = null;
        }, 800);
    }
}


criarCartas();
