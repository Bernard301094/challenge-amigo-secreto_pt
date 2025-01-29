//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomeAmigos = [];
let amigos = document.querySelector('#amigo');
let listaAmigos = document.querySelector('#listaAmigos');

const adicionarAmigo = () => {
    nomeAmigos.push(amigos.value);
    listaAmigos.innerHTML += `<li>${amigos.value}</li>`;

    limparBarraAmigos();
}


const limparBarraAmigos = () => {
    amigos.value = '';
}
