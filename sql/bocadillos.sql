-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-03-2020 a las 17:45:12
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bocadillos`
--
CREATE DATABASE IF NOT EXISTS `bocadillos` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `bocadillos`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bocadillos`
--

DROP TABLE IF EXISTS `bocadillos`;
CREATE TABLE `bocadillos` (
  `id` int(9) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `precio` int(3) NOT NULL,
  `idIngrediente` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `bocadillos`
--

INSERT INTO `bocadillos` (`id`, `nombre`, `precio`, `idIngrediente`) VALUES
(1, 'Bocadillo de jamón', 1, 1),
(2, 'Bocadillo de queso', 1, 2),
(3, 'Serranito', 1, 3),
(4, 'Bocadillo de chorizo', 1, 4),
(8, 'Hamburguesa', 1, 11),
(10, 'Perrito caliente', 1, 12),
(11, 'Pepito de lomo', 1, 8),
(12, 'Bocadillo de tortilla', 1, 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

DROP TABLE IF EXISTS `cliente`;
CREATE TABLE `cliente` (
  `dni` varchar(9) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `telefono` int(9) NOT NULL,
  `direccion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`dni`, `nombre`, `telefono`, `direccion`) VALUES
('11222333R', 'Armando Bronca', 666777888, 'Calle Avenida'),
('33222111G', 'Agapito Agapitez', 666555444, 'Avenida Calle'),
('55969111R', 'Personaje Ficticio', 66377744, 'Teatro de la esquina'),
('55999111R', 'Manolo Manolez', 666000111, 'Avenida manolitez'),
('66333888Y', 'Imanol Imanolitez', 666777222, 'Calle de los imanoles');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingredientes`
--

DROP TABLE IF EXISTS `ingredientes`;
CREATE TABLE `ingredientes` (
  `id` int(9) NOT NULL,
  `nombre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ingredientes`
--

INSERT INTO `ingredientes` (`id`, `nombre`) VALUES
(1, 'Jamon'),
(2, 'Queso'),
(3, 'Pollo'),
(4, 'Chorizo'),
(7, 'Pavo'),
(8, 'Lomo'),
(9, 'Bacon'),
(10, 'Tortilla'),
(11, 'Hamburguesa'),
(12, 'Salchichas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

DROP TABLE IF EXISTS `pedido`;
CREATE TABLE `pedido` (
  `id` int(10) NOT NULL,
  `direccion` varchar(60) NOT NULL,
  `fecha` date NOT NULL,
  `dniCliente` varchar(9) NOT NULL,
  `idBocadillo` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pedido`
--

INSERT INTO `pedido` (`id`, `direccion`, `fecha`, `dniCliente`, `idBocadillo`) VALUES
(1, 'Calle Avenida', '2020-02-26', '11222333R', 1),
(2, 'Avenida Calle', '2020-02-27', '33222111G', 2),
(3, 'Calle calle', '2020-02-26', '33222111G', 3),
(4, 'Avenida avenida', '2020-02-24', '11222333R', 4),
(8, 'Recogida en tienda', '2020-02-25', '55969111R', 12),
(9, 'Cines Los Arcos', '2020-02-18', '11222333R', 10);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bocadillos`
--
ALTER TABLE `bocadillos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`dni`);

--
-- Indices de la tabla `ingredientes`
--
ALTER TABLE `ingredientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `dniCliente` (`dniCliente`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bocadillos`
--
ALTER TABLE `bocadillos`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `ingredientes`
--
ALTER TABLE `ingredientes`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `pedido`
--
ALTER TABLE `pedido`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`dniCliente`) REFERENCES `cliente` (`dni`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
