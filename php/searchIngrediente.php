<?php
$servidor  = "localhost";
$basedatos = "bocadillos";
$usuario   = "root";
$password  = "";
$nombre = $_GET["nombre"];
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos)
  or die(mysqli_error($conexion));
mysqli_set_charset($conexion, "utf8");
$tabla = '<table class="table table-borderless table-striped">
  <thead class="thead-light">
    <tr>
      <th>Nombre</th>
      <th>Borrar</th>
    </tr>
  </thead>
  <tbody>';
$sql = "SELECT * FROM ingredientes WHERE nombre LIKE '%" . $nombre .
  "%' ORDER BY nombre";
$resultados = mysqli_query($conexion, $sql);
while ($fila = mysqli_fetch_array($resultados)) {
  $tabla .= '<tr>
     <td>' . $fila["nombre"] . '</td>
     <td> <button class="btn btn-danger" onclick="borrarIngrediente(' .
    $fila["id"] . ')"></button></td></tr>';
}
$tabla .= '</tbody></table>';
echo json_encode($tabla);
mysqli_close($conexion);
