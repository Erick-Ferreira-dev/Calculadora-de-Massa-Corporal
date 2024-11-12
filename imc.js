function calcular() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    let resultado = document.querySelector('.resultado1');

    let result = peso / (altura * altura);
    console.log(result);
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.querySelector('.resultado1').innerHTML = 'Valores inválidos';
        resultado.style.background = 'whitesmoke';
        return
    }
    let resultado2 = document.querySelector('.resultado2')
    resultado.innerHTML = ` O seu IMC é ${result} `;
    resultado.style.background = 'whitesmoke';

    if(result  < 18){
        resultado2.innerHTML  = 'Você está abaixo do peso'
        resultado2.style.background = '#9BC1E6'
    } else if(result  > 18.5 && result < 24.9){
        resultado2.innerHTML = 'O seu peso está normal'
        resultado2.style.background = '#00AF50'
    }else if(result > 25 && result < 29.9){
        resultado2.innerHTML = 'Você está com sobrepeso'
        resultado2.style.background = '#FFC000'
    }else if(result > 30 && result < 34.9 ){
        resultado2.innerHTML = 'Você está obeso'
        resultado2.style.background = '#F2640E'
    }else if( result > 35){
        resultado2.innerHTML = 'Você está com obesidade mórbida'
        resultado2.style.background = '#DA0000'
    }
    return result;
    
}

function novoCalculo() {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.querySelector('.resultado1').innerHTML = '';
    document.querySelector('.resultado2').innerHTML = '';
    let resultado = document.querySelector('.resultado1');
    resultado.style.background = 'transparent';
    
}