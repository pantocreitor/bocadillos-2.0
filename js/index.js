// retomamos

$(document).ready(function() {
  $("#insertBocadillo").click(function() {
    cargarInsertBocadillo();
  });
  $("#listaBocadillos").click(function() {
    cargarlistaBocadillos();
  });
  $("#insertCliente").click(function() {
    cargarInsertCliente();
  });
  $("#listaClientes").click(function() {
    cargarlistaClientes();
  });
  $("#insertIngrediente").click(function() {
    cargarInsertIngrediente();
  });
  $("#listaIngredientes").click(function() {
    cargarlistaIngredientes();
  });
  $("#insertPedido").click(function() {
    cargarInsertPedido();
  });
  $("#listaPedidos").click(function() {
    cargarlistaPedidos();
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

function cargarlistaBocadillos() {
  // Oculto todos los formularios menos este
  $("#formularios div:not('#listBocadillos')").hide("normal");
  // Verifico si ya he cargado el formulario antes
  if ($("#listBocadillos").length == 0) {
    $("#contenido").load("html/listBocadillos.html", function() {
      $.getScript("js/listBocadillos.js");
    });
  } else {
    // Lo muestro si está oculto
    $("#listBocadillos").show("normal");
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

function cargarlistaClientes() {
  // Oculto todos los formularios menos este
  $("#formularios div:not('#listClientes')").hide("normal");
  // Verifico si ya he cargado el formulario antes
  if ($("#listClientes").length == 0) {
    $("#contenido").load("html/listClientes.html", function() {
      $.getScript("js/listClientes.js");
    });
  } else {
    // Lo muestro si está oculto
    $("#listClientes").show("normal");
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

function cargarlistaIngredientes() {
  // Oculto todos los formularios menos este
  $("#formularios div:not('#listIngredientes')").hide("normal");
  // Verifico si ya he cargado el formulario antes
  if ($("#listIngredientes").length == 0) {
    $("#contenido").load("html/listIngredientes.html", function() {
      $.getScript("js/listIngredientes.js");
    });
  } else {
    // Lo muestro si está oculto
    $("#listIngredientes").show("normal");
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

function cargarlistaPedidos() {
  // Oculto todos los formularios menos este
  $("#formularios div:not('#listPedidos')").hide("normal");
  // Verifico si ya he cargado el formulario antes
  if ($("#listPedidos").length == 0) {
    $("#contenido").load("html/listPedidos.html", function() {
      $.getScript("js/listPedidos.js");
    });
  } else {
    // Lo muestro si está oculto
    $("#listPedidos").show("normal");
  }
}
