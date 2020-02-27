console.log("insertIngredienteCargado");
frmInsertIngredienteFrm.reset();

document
  .querySelector("#frmInsertIngredienteAceptar")
  .addEventListener("click", insertIngrediente);

function insertIngrediente() {
  let nombre = document
    .querySelector("#frmInsertIngredienteNombre")
    .value.trim();
  param = "nombre=" + nombre;
  $.post(
    "./php/insertIngrediente.php",
    param,
    respuestaInsertIngrediente,
    "json"
  );
}

function respuestaInsertIngrediente(json) {
  console.log(json);
  if (json.error) {
    alert(json.mensaje);
  } else {
    alert(json.mensaje);
    frmInsertIngredienteFrm.reset();
    $("#frmInsertIngrediente").hide("normal");
  }
}
