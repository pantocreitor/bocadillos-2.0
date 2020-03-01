console.log("listBocadillosCargado");
limpiar();

function limpiar() {
  if (!$("#listBocadillos").is(":empty")) {
    $("#listBocadillos").empty();
  }
}

obtenerIngredientes();

function obtenerIngredientes() {
  $.get("./php/listBocadillos.php", crearTablaBocadillos, "json");
}

document
  .querySelector("#listBocadillosSearchButton")
  .addEventListener("click", buscar);

function buscar() {
  param =
    "nombre=" +
    document.querySelector("#listBocadillosSearchName").value.trim();
  $.get("./php/searchBocadillo.php", param, crearTablaBocadillos, "json");
}

function crearTablaBocadillos(json) {
  limpiar();
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
    location.reload((forceGet = true));
  }
}
