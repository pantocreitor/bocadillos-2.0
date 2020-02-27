<?php
$servidor = "localhost";
$basedatos = "bocadillos";
$usuario = "root";
$password = "";
$id = $_POST['id'];
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion, "utf8");
$sql = "DELETE FROM bocadillos WHERE id=" . $id;
$resultado = mysqli_query($conexion, $sql);
if ($resultado) {
     $respuesta["error"] = 0;
     $respuesta["mensaje"] = "Alta realizada";
} else {
     $respuesta["error"] = 1;
     $respuesta["mensaje"] = "Error en el proceso de alta: " . mysqli_error($conexion);
}
echo json_encode($respuesta);
