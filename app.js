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

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'x';
        removeButton.className = 'button-remove';
        removeButton.onclick = () => removerAmigo(index);

        li.appendChild(removeButton);
        lista.appendChild(li);
    });
}

function sortearAmigoSecreto() {
    if (amigos.length < 2) {
        alert('É necessário pelo menos 2 amigos para realizar o sorteio.');
        return;
    }

    let amigosDisponiveis = [...amigos];
    let resultado = [];
    let amigoAtual = amigosDisponiveis.splice(Math.floor(Math.random() * amigosDisponiveis.length), 1)[0];
    let primeiroAmigo = amigoAtual;


    while (amigosDisponiveis.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigosDisponiveis.length);
        let amigoSorteado = amigosDisponiveis.splice(indiceAleatorio, 1)[0];
        resultado.push(`${amigoAtual} tirou: ${amigoSorteado}`);
        amigoAtual = amigoSorteado;
    }

    resultado.push(`${amigoAtual} tirou: ${primeiroAmigo}`);

    document.getElementById('apresentacao').textContent = 'Resultado do sorteio:';
    document.getElementById('resultado-amigo').innerHTML = resultado.join('<br>');
}