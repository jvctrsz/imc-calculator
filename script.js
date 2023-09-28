function calcular() {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let resultado = document.getElementById("resultado");
  let calculo = peso / ((altura * altura) / 10000);
  resultado.style.cssText = `
            background-color: #8ae287;
            padding: 10px;
            border-radius: 10px;
            `;

  if (peso == "" && altura == "") {
    resultado.innerHTML = ``;
  } else if (calculo < 18.5) {
    resultado.innerHTML = `O seu imc é de ${calculo.toFixed(1)} Kg/m2. Seu peso esta abaixo do ideal, procure um profissional da área.`;
  } else if (calculo > 18.4 && calculo < 24.9) {
    resultado.innerHTML = `O seu imc é de ${calculo.toFixed(1)} Kg/m2. E seu peso está normal.`;
  } else if (calculo > 24.9 && calculo < 29.9) {
    resultado.innerHTML = `O seu imc é de ${calculo.toFixed(1)} Kg/m2. Seu peso está um pouco acima do normal.`;
  } else if (calculo > 29.9 && calculo < 34.9 ) {
    resultado.innerHTML = `O seu imc é de ${calculo.toFixed(1)} Kg/m2. E você esta com Obesidade grau I, procure um profissional da área.`;
  } else if (calculo > 34.9 && calculo < 39.9 ) {
    resultado.innerHTML = `O seu imc é de ${calculo.toFixed(1)} Kg/m2. E você esta com Obesidade grau II, procure um profissional da área.`;
  } else if (calculo > 39.9) {
    resultado.innerHTML = `O seu imc é de ${calculo.toFixed(1)} Kg/m2. E você esta com Obesidade grau III, procure um profissional da área.`;
  }
}
