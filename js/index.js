$(document).ready(function() {
  $("#insertBocadillo").click(function() {
    cargarInsertBocadillo();
  });
  $("#insertCliente").click(function() {
    cargarInsertCliente();
  });
  $("#insertIngrediente").click(function() {
    cargarInsertIngrediente();
  });
  $("#insertPedido").click(function() {
    cargarInsertPedido();
  });
});

function cargarInsertBocadillo() {
  // Oculto todos los formularios menos este
  $("#formularios div:not('#frmInsertBocadillo')").hide("normal");
  // Verifico si ya he cargado el formulario antes
  if ($("#frmInsertBocadillo").length == 0) {
    $("#contenido").load("html/insertBocadillo.html", function() {
      $.getScript("js/insertBocadillo.js");
    });
  } else {
    // Lo muestro si está oculto
    $("#frmInsertBocadillo").show("normal");
  }
}

function cargarInsertCliente() {
  // Oculto todos los formularios menos este
  $("#formularios div:not('#frmInsertCliente')").hide("normal");
  // Verifico si ya he cargado el formulario antes
  if ($("#frmInsertCliente").length == 0) {
    $("#contenido").load("html/insertCliente.html", function() {
      $.getScript("js/insertCliente.js");
    });
  } else {
    // Lo muestro si está oculto
    $("#frmInsertCliente").show("normal");
  }
}

function cargarInsertIngrediente() {
  // Oculto todos los formularios menos este
  $("#formularios div:not('#frmInsertIngrediente')").hide("normal");
  // Verifico si ya he cargado el formulario antes
  if ($("#frmInsertIngrediente").length == 0) {
    $("#contenido").load("html/insertIngrediente.html", function() {
      $.getScript("js/insertIngrediente.js");
    });
  } else {
    // Lo muestro si está oculto
    $("#frmInsertIngrediente").show("normal");
  }
}

function cargarInsertPedido() {
  // Oculto todos los formularios menos este
  $("#formularios div:not('#frmInsertPedido')").hide("normal");
  // Verifico si ya he cargado el formulario antes
  if ($("#frmInsertPedido").length == 0) {
    $("#contenido").load("html/insertPedido.html", function() {
      $.getScript("js/insertPedido.js");
    });
  } else {
    // Lo muestro si está oculto
    $("#frmInsertPedido").show("normal");
  }
}
