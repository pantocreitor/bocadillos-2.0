console.log("listPedidosCargado");

limpiar();

function limpiar() {
  if (!$("#listPedidos").is(":empty")) {
    $("#listPedidos").empty();
  }
}

obtenerPedidos();

function obtenerPedidos() {
  $.get("./php/listPedidos.php", crearTablaPedidos, "json");
}

document
  .querySelector("#listPedidosSearchButton")
  .addEventListener("click", buscar);

function buscar() {
  param =
    "nombre=" +
    document.querySelector("#listPedidosSearchCliente").value.trim();
  $.get("./php/searchPedido.php", param, crearTablaPedidos, "json");
}

function crearTablaPedidos(json) {
  limpiar();
  $("#listPedidos").html(json);
}

function borrarPedido(id) {
  param = "id=" + id;
  $.post("./php/delPedido.php", param, respuestaDelPedido, "json");
}

function respuestaDelPedido(json) {
  console.log(json);
  if (json.error) {
    alert(json.mensaje);
  } else {
    alert(json.mensaje);
    location.reload((forceGet = true));
  }
}
