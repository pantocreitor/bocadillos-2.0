<?php
$servidor  = "localhost";
$basedatos = "bocadillos";
$usuario   = "root";
$password  = "";
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos)
  or die(mysqli_error($conexion));
mysqli_set_charset($conexion, "utf8");
$tabla = '<table class="table table-borderless table-striped">
  <thead class="thead-light">
    <tr>
      <th>ID</th>
      <th>Nombre</th>
      <th>Precio</th>
      <th>Borrar</th>
    </tr>
  </thead>
  <tbody>';
$sql = "SELECT id, nombre, precio FROM bocadillos ORDER BY id";
$resultados = mysqli_query($conexion, $sql);
while ($fila = mysqli_fetch_array($resultados)) {
  $tabla .= '<tr>
     <td>' . $fila["id"] . '</td>
     <td>' . $fila["nombre"] . '</td>
     <td>' . $fila["precio"] . '</td>
     <td> <button class="btn btn-danger" onclick="borrarBocadillo(' .
    $fila["id"] . ')"></button></td></tr>';
}
$tabla .= '</tbody></table>';
echo json_encode($tabla);
mysqli_close($conexion);
