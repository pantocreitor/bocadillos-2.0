console.log("listPedidosCargado");
if (!$("#listPedidos").is(":empty")) {
  $("#listPedidos").empty();
}
obtenerPedidos();

function obtenerPedidos() {
  $.get("./php/listPedidos.php", crearTablaPedidos, "json");
}

function crearTablaPedidos(json) {
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
