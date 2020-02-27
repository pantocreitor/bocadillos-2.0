console.log("listClientesCargado");
if (!$("#listClientes").is(":empty")) {
  $("#listClientes").empty();
}
obtenerIngredientes();

function obtenerIngredientes() {
  $.get("./php/listClientes.php", crearTablaClientes, "json");
}

function crearTablaClientes(json) {
  $("#listClientes").html(json);
}

function borrarCliente(dni) {
  param = "dni=" + dni;
  $.post("./php/delCliente.php", param, respuestaDelCliente, "json");
}

function respuestaDelCliente(json) {
  console.log(json);
  if (json.error) {
    alert(json.mensaje);
  } else {
    alert(json.mensaje);
    location.reload((forceGet = true));
  }
}
