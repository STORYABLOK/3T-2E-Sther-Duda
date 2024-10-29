function criarCartao(categoria,pergunta,resposta){
    let container = document.getElementById('container')
    let article = document.createElement('article')
    article.className = 'cartao'
    article.innerHTML = `
    <div class="cartao-conteudo">
        <h3>${categoria}</h3>
        <div class="cartao-conteudo-pergunta">
            <p>${pergunta}</p>
        </div>
        <div class="cartao-conteudo-resposta">
            <p>${resposta}</p>
        </div>
    </div>

`
    container.appendChild(article)
}


criarCartao("Biologia", "Qual a função da mitocondria?", "Produção de energia (ATP)")
criarCartao("História", "Oque foi a idade média?", "Ficou marcada pelo feudalismo, pela influência da Igreja, e pelas Cruzadas e Inquisição.")

