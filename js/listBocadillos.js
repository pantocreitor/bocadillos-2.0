console.log("listBocadillosCargado");
if (!$("#listBocadillos").is(":empty")) {
  $("#listBocadillos").empty();
}
obtenerIngredientes();

function obtenerIngredientes() {
  $.get("./php/listBocadillos.php", crearTablaBocadillos, "json");
}

function crearTablaBocadillos(json) {
  $("#listBocadillos").html(json);
}

function borrarBocadillo(id) {
  param = "id=" + id;
  $.post("./php/delBocadillo.php", param, respuestaDelBocadillo, "json");
}

function respuestaDelBocadillo(json) {
  console.log(json);
  if (json.error) {
    alert(json.mensaje);
  } else {
    alert(json.mensaje);
    $("#listBocadillos").hide("normal");
  }
}
