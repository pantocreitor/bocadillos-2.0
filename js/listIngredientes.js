console.log("listIngredientesCargado");
if (!$("#listIngredientes").is(":empty")) {
  $("#listIngredientes").empty();
}
obtenerIngredientes();

function obtenerIngredientes() {
  $.get("./php/listIngredientes.php", crearTablaIngredientes, "json");
}

function crearTablaIngredientes(json) {
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
