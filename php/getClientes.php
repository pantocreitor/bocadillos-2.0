<?php

$servidor  = "localhost";
$basedatos = "bocadillos";
$usuario   = "root";
$password  = "";
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos)
     or die(mysqli_error($conexion));
mysqli_set_charset($conexion, "utf8");
$sql = "SELECT * FROM cliente ORDER BY nombre";
$resultados = mysqli_query($conexion, $sql);
$datos = "";
while ($fila = mysqli_fetch_array($resultados)) {
     $datos .= '<option value="' . $fila["dni"] . '">' .
          $fila["nombre"] . '</option>';
}
echo json_encode($datos);
mysqli_close($conexion);
