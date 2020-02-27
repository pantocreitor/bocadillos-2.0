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
      <td>DNI</td>
      <td>Nombre</td>
      <td>Telefono</td>
      <td>Direccion</td>
      <td>Borrar</td>
    </tr>
  </tdead>
  <tbody>';
$sql = "SELECT * FROM cliente ORDER BY nombre";
$resultados = mysqli_query($conexion, $sql);
while ($fila = mysqli_fetch_array($resultados)) {
     $tabla .= '<tr>
     <td>' . $fila["dni"] . '</td>
     <td>' . $fila["nombre"] . '</td>
     <td>' . $fila["telefono"] . '</td>
     <td>' . $fila["direccion"] . '</td>
     <td> <button class="btn btn-danger" onclick="borrarCliente(\'' . $fila["dni"] . '\')"></button></td></tr>';
}
$tabla .= '</tbody></table>';
echo json_encode($tabla);
mysqli_close($conexion);
$f = ' . $fila["dni"] . ';
