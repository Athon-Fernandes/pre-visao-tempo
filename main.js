// criar constane com a chave da API
const key = 'e0283766cee7e7e70be7e75409ae8042'

function Coletar() {
   let cidade = document.querySelector('.input-cidade').value
   console.log(cidade)
   Dados(cidade)
}

//costruindo dados da API openweather
async function Dados(cidade) {
   let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json())
   console.log(dados)
   ExibirDados(dados)
}
//funçoes torcar Dados 

function ExibirDados(dados) {
document.querySelector ('.Cidade').innerHTML = "tempo em" + dados.name
document.querySelector ('.Graus').innerHTML = Math.floor(dados.main.temp) + " °C" 
document.querySelector('.Previsão').innerHTML = dados.weather[0].desceription
document.querySelector('.Umidade').innerHTML = "Umidade Relativa do Ar" + dados.main.humidity + "%"
document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

