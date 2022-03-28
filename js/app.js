let counter = 0;

$(document).ready(function () {
    console.log("DOM cargado! Implementa tu solución a partir de esta línea.");

});

let cuenta = 0

$("#sumar").click(function(){
    cuenta++
    console.log(cuenta)
    $("#counter").text(cuenta)

    if (cuenta > 0 ) {
        $("#counter").css("color", "green");
      }else {
        $("#counter").css("color", "red");
      }

  });
  
  $("#restar").click(function(){
    cuenta--
    console.log(cuenta)
    $("#counter").text(cuenta)

    if (cuenta > 0 ) {
        $("#counter").css("color", "green");
      }else {
        $("#counter").css("color", "red");
      }

  });


  