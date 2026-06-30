// Executa quando a página é carregada
window.onload = function() {
    console.log("Página carregada com sucesso!");
    exibirDataHora();
};

// Função do botão principal
function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "Parabéns! O JavaScript está funcionando.";
    mensagem.style.color = "green";

    console.log("Botão clicado!");
}

// Exibe data e hora atual
function exibirDataHora() {
    const agora = new Date();

    console.log(
        "Data e hora atual: " +
        agora.toLocaleDateString("pt-BR") +
        " " +
        agora.toLocaleTimeString("pt-BR")
    );
}

// Altera a cor de fundo aleatoriamente
function mudarCorFundo() {
    const cores = [
        "#f4f4f4",
        "#d4edda",
        "#fff3cd",
        "#d1ecf1",
        "#f8d7da"
    ];

    const cor = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = cor;
}

// Contador de cliques
let contador = 0;

function contarCliques() {
    contador++;
    document.getElementById("mensagem").innerHTML =
        `Você clicou ${contador} vez(es).`;
}

// Executa a cada 5 segundos
setInterval(() => {
    console.log("Sistema funcionando:", new Date().toLocaleTimeString());
}, 5000);