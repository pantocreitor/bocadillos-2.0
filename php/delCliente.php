<?php
$servidor = "localhost";
$basedatos = "bocadillos";
$usuario = "root";
$password = "";
$dni = $_POST['dni'];
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos)
     or die(mysqli_error($conexion));
mysqli_set_charset($conexion, "utf8");
$sql = "DELETE FROM cliente WHERE dni='" . $dni . "'";
$resultado = mysqli_query($conexion, $sql);
if ($resultado) {
     $respuesta["error"] = 0;
     $respuesta["mensaje"] = "Cliente eliminado";
} else {
     $respuesta["error"] = 1;
     $respuesta["mensaje"] = "Error " . mysqli_error($conexion);
}
echo json_encode($respuesta);
