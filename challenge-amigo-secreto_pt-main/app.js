//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nomeAmigo = input.value.trim();

if (nomeAmigo && !amigos.includes(nomeAmigo)) {
        amigos.push(nomeAmigo);
        atualizarListaAmigos();
        input.value = ''; // Limpa o campo de entrada
    } else {
        alert("Por favor, insira um nome válido ou que ainda não foi adicionado.");
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ''; // Limpa a lista atual

 amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Você precisa de pelo menos 2 amigos para fazer o sorteio.");
        return;
    }

const amigosSorteados = [...amigos]; // Copia a lista de amigos
    const resultados = {};

    amigos.forEach(amigo => {
        let indiceSorteado;

// Sorteia um amigo diferente de si mesmo
        do {
            indiceSorteado = Math.floor(Math.random() * amigosSorteados.length);
        } while (amigosSorteados[indiceSorteado] === amigo);

resultados[amigo] = amigosSorteados[indiceSorteado];

        // Remove o amigo sorteado da lista
        amigosSorteados.splice(indiceSorteado, 1);
    });

    mostrarResultados(resultados);
}

function mostrarResultados(resultados) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ''; // Limpa resultados anteriores

    for (const [nome, amigo] of Object.entries(resultados)) {
        const li = document.createElement("li");
        li.textContent = `${nome} tirou ${amigo}`;
        resultadoDiv.appendChild(li);
    }
}