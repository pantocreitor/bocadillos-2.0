<?php
$servidor = "localhost";
$basedatos = "bocadillos";
$usuario = "root";
$password = "";
$dni = $_POST['dni'];
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$direccion = $_POST['direccion'];
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion, "utf8");
$sql = "INSERT INTO cliente (dni, nombre, telefono, direccion) VALUES ('"
     . $dni . "', '" . $nombre . "', " . $telefono .
     ", '" . $direccion . "')";
$resultado = mysqli_query($conexion, $sql);
if ($resultado) {
     $respuesta["error"] = 0;
     $respuesta["mensaje"] = "Cliente añadido";
} else {
     $respuesta["error"] = 1;
     $respuesta["mensaje"] = "Error " . mysqli_error($conexion);
}
echo json_encode($respuesta);
