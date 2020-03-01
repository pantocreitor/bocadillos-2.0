console.log("listIngredientesCargado");
limpiar();

function limpiar() {
  if (!$("#listIngredientes").is(":empty")) {
    $("#listIngredientes").empty();
  }
}

obtenerIngredientes();

function obtenerIngredientes() {
  $.get("./php/listIngredientes.php", crearTablaIngredientes, "json");
}

document
  .querySelector("#listIngredientesSearchButton")
  .addEventListener("click", buscar);

function buscar() {
  param =
    "nombre=" +
    document.querySelector("#listIngredientesSearchName").value.trim();
  $.get("./php/searchIngrediente.php", param, crearTablaIngredientes, "json");
}

function crearTablaIngredientes(json) {
  limpiar();
  $("#listIngredientes").html(json);
}

function borrarIngrediente(id) {
  param = "id=" + id;
  $.post("./php/delIngrediente.php", param, respuestaDelIngrediente, "json");
}

function respuestaDelIngrediente(json) {
  console.log(json);
  if (json.error) {
    alert(json.mensaje);
  } else {
    alert(json.mensaje);
    location.reload((forceGet = true));
  }
}
