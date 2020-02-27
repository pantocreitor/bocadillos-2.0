console.log("insertClienteCargado");
frmInsertClienteFrm.reset();

document
  .querySelector("#frmInsertClienteAceptar")
  .addEventListener("click", insertCliente);

function insertCliente() {
  let dni = document.querySelector("#frmInsertClienteDni").value.trim();
  let nombre = document.querySelector("#frmInsertClienteNombre").value.trim();
  let telefono = parseInt(
    document.querySelector("#frmInsertClienteTlf").value.trim()
  );
  let direccion = document
    .querySelector("#frmInsertClienteDireccion")
    .value.trim();
  param =
    "dni=" +
    dni +
    "&nombre=" +
    nombre +
    "&telefono=" +
    telefono +
    "&direccion=" +
    direccion;
  $.post("./php/insertCliente.php", param, respuestaInsertCliente, "json");
}

function respuestaInsertCliente(json) {
  console.log(json);
  if (json.error) {
    alert(json.mensaje);
  } else {
    alert(json.mensaje);
    frmInsertClienteFrm.reset();
    $("#frmInsertCliente").hide("normal");
  }
}
