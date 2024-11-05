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
criarCartao("Arte", "Quem foi Gustave Courbet?", "Courbet foi um pintor francês pioneiro do estilo realista francês. Foi acima de tudo um pintor da vida camponesa de sua região.")
criarCartao("Ed.Financeira", " Método 50-30-20?", "O método 50-30-20 consiste na divisão da renda do mês, sendo despesas fixas, essenciais e obrigatórias em 50%, despesas variáveis em 30%, e objetivo a ser conquistado em 20%.")