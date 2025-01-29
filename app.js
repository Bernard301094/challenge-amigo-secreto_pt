//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


// Variáveis globais
let nomeAmigos = []; // Array que armazena a lista de nomes dos participantes
let amigos = document.querySelector('#amigo'); // Input para digitar os nomes
let listaAmigos = document.querySelector('#listaAmigos'); // Lista UL onde os nomes são exibidos
let resultado = document.querySelector('#resultado'); // Elemento para mostrar o resultado do sorteio

// Função que atualiza a lista de amigos na interface
function atualizarListaAmigos() {
    let html = '';
    // Constrói cada item da lista com nome e botão de remover
    for (let i = 0; i < nomeAmigos.length; i++) {
        html += `
            <li>
                ${nomeAmigos[i]} 
                <button 
                    onclick="removerAmigo(${i})" 
                    style="
                        font-size: 10px; 
                        padding: 1px 4px; 
                        margin-left: 8px;
                        border: none;
                        border-radius: 3px;
                        background: #ff4444;
                        color: white;
                        cursor: pointer;
                    "
                >
                    X
                </button>
            </li>`;
    }
    listaAmigos.innerHTML = html; // Atualiza o conteúdo da lista
}

// Função para adicionar novo amigo à lista
const adicionarAmigo = () => {
    // Validação de campo vazio
    if (amigos.value === '') {
        alert("Por favor, insira um nome.");
    } else {
        nomeAmigos.push(amigos.value); // Adiciona ao array
        atualizarListaAmigos(); // Atualiza a lista na interface
    }
    limparNomeAmigo(); // Limpa o campo de input
}

// Função para limpar o campo de digitação
const limparNomeAmigo = () => {
    amigos.value = ''; // Reseta o valor do input
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    nomeAmigos.splice(index, 1); // Remove o elemento do array
    atualizarListaAmigos(); // Atualiza a lista na interface
}

// Função principal que realiza o sorteio
function sortearAmigo() {
    // Verifica se há nomes na lista
    if (nomeAmigos.length === 0 || nomeAmigos.length === 1) {
        resultado.innerHTML = '';
        return; // Sai da função se a lista estiver vazia
    }
    // Lógica de sorteio aleatório
    let sorteado = nomeAmigos[Math.floor(Math.random() * nomeAmigos.length)];
    resultado.innerHTML = `<li>${sorteado}</li>`; // Exibe o resultado
}