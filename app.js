let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nomeAmigo = input.value.trim();

    if (nomeAmigo) {
        amigos.push(nomeAmigo);
        input.value = '';
        atualizarListaAmigos();
    }
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('apresentacao').textContent = 'Amigo sorteado:';
    document.getElementById('resultado-amigo').textContent = amigoSorteado;
}