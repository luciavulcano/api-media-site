function calculaMedia(produto) {
    let expressao = '';
    if (produto.notas.length === 0) {
        return `Sem notas`;
    };
    for (let i = 0; i < produto.notas.length; i++) {
        if (i === 0) {
            expressao = produto.notas[i].nota;
        } else {
            expressao = `${expressao} + ${produto.notas[i].nota}`;
        };
    };
    expressao = encodeURIComponent(`(${expressao})/${produto.notas.length}`);
    let arredonda = Math.floor(httpGet(expressao));
    return arredonda;
};


function httpGet(parametro) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", 'https://api.mathjs.org/v4/?expr=' + parametro, false);
    xhr.send(null);

    return xhr.responseText;
};