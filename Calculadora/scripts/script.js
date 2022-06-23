function calculo(n1, n2){

    n1 = parseFloat(document.getElementById('n1').value); 
    n2 = parseFloat(document.getElementById('n2').value);

    selector = document.getElementById('selector').value;

    let calcular 

    switch(selector){
        case '+': 
            calcular = (n1 + n2)
            resultado = document.getElementById('resultado').innerHTML = `${n1} + ${n2} = ${calcular}`;
            break 

        case '-': 
            calcular = (n1 - n2)
            resultado = document.getElementById('resultado').innerHTML = `${n1} - ${n2} = ${calcular}`;
            break
        
        case '*': 
            calcular = (n1 * n2)
            resultado = document.getElementById('resultado').innerHTML = `${n1} x ${n2} = ${calcular}`;
            break
        
        case '/': 
            calcular = (n1 / n2);
            resultado = document.getElementById('resultado').innerHTML = `${n1} / ${n2} = ${calcular}`;
            break

        case '%':
            calcular = ((n1 * n2) / 100)
            resultado = document.getElementById('resultado').innerHTML = `${n1}% de ${n2} = ${calcular}`
    }
}