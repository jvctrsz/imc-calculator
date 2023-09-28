function calcular(){
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let resultado = document.getElementById('resultado')
    if(peso == '' && altura == ''){
        resultado.innerHTML = ``
    }
    else{
        let calculo = peso/((altura*altura)/10000)
        resultado.innerHTML = `O seu imc é de ${calculo.toFixed(2)}`
        resultado.style.cssText = `
        background-color: #8ae287;
        padding: 10px;
        border-radius: 10px;
        `
    }
}