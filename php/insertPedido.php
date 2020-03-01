<?php
$servidor = "localhost";
$basedatos = "bocadillos";
$usuario = "root";
$password = "";
$direccion = $_POST['direccion'];
$fecha = $_POST['fecha'];
$cliente = $_POST['cliente'];
$bocadillo = $_POST['bocadillo'];
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos) or
     die(mysqli_error($conexion));
mysqli_set_charset($conexion, "utf8");
$sql = "INSERT INTO pedido (direccion, fecha, dniCliente, idBocadillo) 
VALUES ('$direccion', '$fecha', '$cliente', $bocadillo)";
$resultado = mysqli_query($conexion, $sql);
if ($resultado) {
     $respuesta["error"] = 0;
     $respuesta["mensaje"] = "Pedido añadido";
} else {
     $respuesta["error"] = 1;
     $respuesta["mensaje"] = "Error " . mysqli_error($conexion);
}
echo json_encode($respuesta);
