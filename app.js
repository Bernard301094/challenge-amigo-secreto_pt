//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomeAmigos = [];
let amigos = document.querySelector('#amigo');
let listaAmigos = document.querySelector('#listaAmigos');
let resultado = document.querySelector('#resultado');

const adicionarAmigo = () => {
    if(amigos.value === ''){
        alert("Por favor, insira um nome.");
    } else {
        nomeAmigos.push(amigos.value);
        listaAmigos.innerHTML += `<li>${amigos.value}</li>`;
    }

    limparNomeAmigo();
}

const limparNomeAmigo = () => {
    amigos.value = '';
}

function sortearAmigo() {
    let sorteado = nomeAmigos[Math.floor(Math.random() * nomeAmigos.length)];
    resultado.innerHTML = `<li>${sorteado}</li>`;

    if(nomeAmigos.length === 0){
        resultado.innerHTML = '';
    }
}