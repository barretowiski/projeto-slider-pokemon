
    const btnAvancar = document.getElementById('btn-avancar')
    const btnbtnVoltar = document.getElementById('btn-voltar')
    let cartaoAtual = 0;

    function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado')
    cartaoSelecionado.classList.remove('selecionado')

    }

    function mostarCartao(indiceCartao){
        cartoes[indiceCartao].classList.add('selecionado')
    }
    
    const cartoes = document.querySelectorAll('.cartao')

    btnAvancar.addEventListener('click' , function (){
    if(cartaoAtual === cartoes.length -1) return

    esconderCartaoSelecionado()
    
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add('selecionado')
    mostarCartao(cartaoAtual)

    })

    btnbtnVoltar.addEventListener('click' , function (){

    if(cartaoAtual ===0)return

    const cartaoSelecionado = document.querySelector('.selecionado')
    cartaoSelecionado.classList.remove('selecionado')

    cartaoAtual--;
    mostarCartao(cartaoAtual)

    })








    







