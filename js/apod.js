let obj;
const botao = $("#btnSubmit");
const titulo = $("#titulo");
const explicacao = $("#explicacao");
const img = $("#fotoOuVideo");

botao.on("click", function (event) {
    event.preventDefault();
    pedido();
});

function pedido(data) {
    $(`#data`).val();

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=dhlggRiSdNkobaNCGmOjZBpJlUJRAdY9eubhX2bq&date=` + $(`#data`).val(),

        success: function (result) {
            console.log(result);
            obj = result;
            titulo.html(`${obj.title}`);
            explicacao.html(`${obj.explanation}`);
            if (obj.media_type != "video") {
                img.html(`
      <img width = '600' heigth = '600' id="foto" src="${obj.url}" alt=""></img>
      `);
            } else {
                img.html(`
      <iframe id="video" src="${obj.url}" alt=""></iframe>
      `);
            }
        },
    });
}
