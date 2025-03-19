//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    // Validar se o campo de texto está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Adicionar o nome à lista
    listaAmigos.push(nomeAmigo);

    // Atualizar a lista de nomes na tela
    atualizarListaAmigos();

    // Limpar o campo de texto
    inputAmigo.value = "";
}

// Função para atualizar a lista de nomes na tela
function atualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = ""; // Limpar a lista atual

    // Adicionar cada nome da lista ao elemento <ul>
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigosElement.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verificar se há nomes na lista
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    // Sortear um nome aleatório
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado];

    // Exibir o resultado na tela
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>Amigo secreto: ${amigoSorteado}</li>`;
}