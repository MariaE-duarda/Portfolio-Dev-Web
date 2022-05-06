function atualizarTempo(){
    var display = document.querySelector('.display');
    var agora = new Date();
    var horario = corrigir(agora.getHours()) + ':' + corrigir(agora.getMinutes()) + ':' + corrigir(agora.getSeconds());

    display.textContent  = horario;
}

function corrigir(numero){
    if (numero < 10) {
        numero = '0' + numero;
    } 
    return numero; 
}

atualizarTempo(); 

setInterval(atualizarTempo, 1000);
console.log(horario);