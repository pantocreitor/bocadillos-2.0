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
     <th>ID</th>
     <th>Bocadillo</th>
     <th>Cliente</th>
     <th>Direccion</th>
     <th>Teléfono</th>
     <th>Fecha</th>
     <th>Borrar</th>
    </tr>
  </thead>
  <tbody>';
$sql = "SELECT p.id AS id, b.nombre AS bocadillo, c.nombre AS nombre, 
p.direccion AS direccion, c.telefono AS telefono, p.fecha as fecha 
FROM pedido p, cliente c, bocadillos b WHERE c.dni = p.dniCliente 
AND p.idBocadillo = b.id AND c.nombre LIKE '%" . $nombre . "%' 
ORDER BY fecha";
$resultados = mysqli_query($conexion, $sql);
while ($fila = mysqli_fetch_array($resultados)) {
     $tabla .= '<tr>
     <td>' . $fila["id"] . '</td>
     <td>' . $fila["bocadillo"] . '</td>
     <td>' . $fila["nombre"] . '</td>
     <td>' . $fila["direccion"] . '</td>
     <td>' . $fila["telefono"] . '</td>
     <td>' . $fila["fecha"] . '</td>
     <td> <button class="btn btn-danger" onclick="borrarPedido(' .
          $fila["id"] . ')"></button></td></tr>';
}
$tabla .= '</tbody></table>';
echo json_encode($tabla);
mysqli_close($conexion);
