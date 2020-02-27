console.log("insertBocadilloCargado");
frmInsertBocadilloFrm.reset();
obtenerIngredientes();

function obtenerIngredientes() {
  $.get("./php/getIngredientes.php", rellenarCheckboxes, "json");
}

function rellenarCheckboxes(json) {
  $("#frmInsertBocadilloIngredientes").html(json);
}

document
  .querySelector("#frmInsertBocadilloAceptar")
  .addEventListener("click", insertBocadillo);

function insertBocadillo() {
  let ingrediente = document.querySelector("#frmInsertBocadilloIngredientes")
    .value;
  let nombre = document.querySelector("#frmInsertBocadilloNombre").value.trim();
  let precio = 1;
  param =
    "     nombre=" +
    nombre +
    "&ingrediente=" +
    ingrediente +
    "&precio=" +
    precio;
  $.post("./php/insertBocadillo.php", param, respuestaInsertBocadillo, "json");
}

function respuestaInsertBocadillo(json) {
  console.log(json);
  if (json.error) {
    alert(json.mensaje);
  } else {
    alert(json.mensaje);
    frmInsertBocadilloFrm.reset();
    $("#frmInsertBocadillo").hide("normal");
  }
}
