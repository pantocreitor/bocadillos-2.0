<?php
$servidor  = "localhost";
$basedatos = "bocadillos";
$usuario   = "root";
$password  = "";
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion, "utf8");
$tabla = '<table class="table">
  <thead>
    <tr>
      <td>ID</td>
      <td>Nombre</td>
      <td>Precio</td>
      <td>Borrar</td>
    </tr>
  </tdead>
  <tbody>';
$sql = "SELECT id, nombre, precio FROM bocadillos ORDER BY id";
$resultados = mysqli_query($conexion, $sql);
while ($fila = mysqli_fetch_array($resultados)) {
  $tabla .= '<tr>
     <td>' . $fila["id"] . '</td>
     <td>' . $fila["nombre"] . '</td>
     <td>' . $fila["precio"] . '</td>
     <td> <button class="btn btn-danger" onclick="borrarBocadillo(' . $fila["id"] . ')"></button></td></tr>';
}
$tabla .= '</tbody></table>';
echo json_encode($tabla);
mysqli_close($conexion);
