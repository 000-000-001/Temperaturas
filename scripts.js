


const key = "cebcd482eda57fa9a6714c1c2ba91885"


function colocarNomesNaTela(dados){

    console.log("")
    document.querySelector(".cidade").innerHTML = " Tempo em " + dados.name
    document.querySelector(".temp").innerHTML =  Math.floor(dados.main.temp) + " °C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dado.weather[0].icon}.png`
}


async function buscarCidade (cidade){

    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
    
    colocarNomesNaTela(dados)

}


function cliqueiNoBotao(){
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade);
}
