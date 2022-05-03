let inverter = document.getElementById('inverter');
inverter.addEventListener('click', trocar)

function trocar(){
    let azul = document.querySelectorAll('.azul')
    let vermelho = document.querySelectorAll('.vermelho')

    for (let i = 0; i < azul.length; i++) {
        azul[i].classList.remove('azul')
        azul[i].classList.add('vermelho')
        
    }
    for (let i = 0; i < vermelho.length; i++) {
        vermelho[i].classList.remove('vermelho')
        vermelho[i].classList.add('azul')
        
    }

}