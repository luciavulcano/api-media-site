function disponibilidade(disponivel) {
    if (disponivel === true) {
        return `<p class="card__disponibilidade"> Disponível </p>`
    }
    if (disponivel === false) {
        return `<p class="card__indisponibilidade"> Indisponível </p>`
    }
}

function precoMedio(preco) {
    if (preco === 1) {
        return `$`
    } 
    if (preco === 2) {
        return `$$`
    } 
    if (preco === 3) {
        return `$$$`
    } 
    if (preco === 4) {
        return `$$$$`
    }
}

const sectionCards = document.querySelector('#sectionCards');
function montaCards(modo) {
    for (let i = 0; i < produtos.length; i++) {
        if (modo === 'verifica disponibilidade' && produtos[i].disponivel === false) {
            continue;
        }
        sectionCards.innerHTML += `
        <article class="card col-12 col-md-3 border border-light rounded-0 p-0 mt-3 mb-3 style="width: 18rem;"">
            <img src="${produtos[i].imagens}" class="card-img-top rounded-0 card__posicao">
            <div class="card-body">
                <h6 class="card-title">${produtos[i].nome}</h6>
                <p class="card-text"> Nota:
                ${calculaMedia(produtos[i])}
                </p>
                <div class="card__texto">                   
                    <p class="card-text">
                    ${produtos[i].categoria} - ${precoMedio(produtos[i].precoMedio)}
                    </p>
                    <p class="card-text">
                    ${disponibilidade(produtos[i].disponivel)}
                    </p>
                </div>
                <a href="#" class="btn btn-block btn-sm btn__detalhes rounded-0 font-weight-bold">Detalhe</a>
            </div>
        </article>`
    }
}

window.onload = montaCards;