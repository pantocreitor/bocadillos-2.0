console.log("listClientesCargado");
limpiar();

function limpiar() {
  if (!$("#listClientes").is(":empty")) {
    $("#listClientes").empty();
  }
}

obtenerClientes();

function obtenerClientes() {
  $.get("./php/listClientes.php", crearTablaClientes, "json");
}

document
  .querySelector("#listClientesSearchButton")
  .addEventListener("click", buscar);

function buscar() {
  param =
    "nombre=" + document.querySelector("#listClientesSearchName").value.trim();
  $.get("./php/searchCliente.php", param, crearTablaClientes, "json");
}

function crearTablaClientes(json) {
  limpiar();
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
