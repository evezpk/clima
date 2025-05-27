const apikey = "b2907b8facdca713c58c7c3620d130ee";

function datascreen(dados) {
  console.log(dados);
  document.querySelector(".city").innerHTML = `Tempo em ${dados.name}`;
  document.querySelector(".temp").innerHTML = `${Math.round(dados.main.temp)}°C`;
  document.querySelector(".wind").innerHTML = `Vento: ${dados.wind.speed.toFixed(1)} km/h`;
  document.querySelector(".humidity").innerHTML = `Pressão: ${dados.main.humidity}%`;
  document.querySelector(".pressure").innerHTML = `Pressão: ${dados.main.pressure} hPa`;
document.querySelector(".visibily").innerHTML = `Visibilidade: ${dados.visibility / 10000} km`;
document.querySelector(".humidity").innerHTML = `Umidade: ${dados.main.humidity}%`;
document.querySelector(".climate").innerHTML = `Clima: ${dados.weather[0].description}`;
document.querySelector(".imgnuv").src = "img/" + dados.weather[0].icon + ".png";


}

async function searchCityData (city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric&lang=pt_br`)
  const dados = await response.json();
datascreen (dados)
}

function handleSearch() {
  const city = document.querySelector(".inputcity").value;
  searchCityData(city);


}

