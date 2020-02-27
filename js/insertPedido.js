console.log("insertPedidoCargado");
frmInsertPedidoFrm.reset();
obtenerBocadillos();
obtenerClientes();

function obtenerBocadillos() {
  $.get("./php/getBocadillos.php", rellenarSelectBocadillos, "json");
}

function rellenarSelectBocadillos(json) {
  $("#frmInsertPedidoBocadillo").html(json);
}

function obtenerClientes() {
  $.get("./php/getClientes.php", rellenarSelectClientes, "json");
}

function rellenarSelectClientes(json) {
  $("#frmInsertPedidoCliente").html(json);
}

document
  .querySelector("#frmInsertPedidoAceptar")
  .addEventListener("click", insertPedido);

function insertPedido() {
  let direccion = document
    .querySelector("#frmInsertPedidoDireccion")
    .value.trim();
  let fecha = document.querySelector("#frmInsertPedidoFecha").value.trim();
  let cliente = document.querySelector("#frmInsertPedidoCliente").value.trim();
  let bocadillo = document
    .querySelector("#frmInsertPedidoBocadillo")
    .value.trim();

  param =
    "direccion=" +
    direccion +
    "&fecha=" +
    fecha +
    "&cliente=" +
    cliente +
    "&bocadillo=" +
    bocadillo;
  $.post("./php/insertPedido.php", param, respuestaInsertPedido, "json");
}

function respuestaInsertPedido(json) {
  console.log(json);
  if (json.error) {
    alert(json.mensaje);
  } else {
    alert(json.mensaje);
    frmInsertPedidoFrm.reset();
    $("#frmInsertPedido").hide("normal");
  }
}
