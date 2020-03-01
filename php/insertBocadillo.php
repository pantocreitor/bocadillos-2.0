<?php
$servidor = "localhost";
$basedatos = "bocadillos";
$usuario = "root";
$password = "";
$nombre = $_POST['nombre'];
$ingrediente = $_POST['ingrediente'];
$precio = $_POST['precio'];
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos)
     or die(mysqli_error($conexion));
mysqli_set_charset($conexion, "utf8");
$sql = "INSERT INTO bocadillos(nombre, precio, idIngrediente) 
VALUES ('$nombre',$precio,$ingrediente)";
$resultado = mysqli_query($conexion, $sql);
if ($resultado) {
     $respuesta["error"] = 0;
     $respuesta["mensaje"] = "Bocadillo añadido";
} else {
     $respuesta["error"] = 1;
     $respuesta["mensaje"] = "Error " . mysqli_error($conexion);
}
echo json_encode($respuesta);
