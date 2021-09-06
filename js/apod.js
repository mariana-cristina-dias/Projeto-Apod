let xhttp = new XMLHttpRequest();

// Verifricando meu status e convertendo para JSON
xhttp.onload = function () {
  if (xhttp.status >= 200 && xhttp.status <= 299) {
  

  }
};

// Configurando minha request
xhttp.open(
  "GET",
  "'https://api.nasa.gov/planetary/apod?api_key=dhlggRiSdNkobaNCGmOjZBpJlUJRAdY9eubhX2bq'"
);
xhttp.send();

let nasa = $.ajax({url: 'https://api.nasa.gov/planetary/apod?api_key=dhlggRiSdNkobaNCGmOjZBpJlUJRAdY9eubhX2bq', async: false}).responseJSON

apod.innerHTML = `
	<h1 class="asfasf"> ${nasa.title} </h1>
    <h1 class="asfasf"> ${nasa.explanation} </h1>
    <h1 class="asfasf"> ${nasa.hdurl} </h1>
`





