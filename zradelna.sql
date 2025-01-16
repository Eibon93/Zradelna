<br />
<b>Warning</b>:  "continue" targeting switch is equivalent to "break". Did you mean to use "continue 2"? in <b>C:\xamppOld\htdocs\adminer\index.php</b> on line <b>1163</b><br />
-- Adminer 4.6.0 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP DATABASE IF EXISTS `zradelna`;
CREATE DATABASE `zradelna` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_czech_ci */;
USE `zradelna`;

DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text COLLATE utf8_czech_ci NOT NULL,
  `description` text COLLATE utf8_czech_ci NOT NULL,
  `image_url` text COLLATE utf8_czech_ci NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

INSERT INTO `menu` (`id`, `name`, `description`, `image_url`, `date`) VALUES
(1,	'Smažený sýr',	'neco',	'',	'2025-01-15 13:00:05'),
(2,	'Španělský ptáček',	'neco',	'',	'2025-01-15 13:00:33');

DROP TABLE IF EXISTS `type_user`;
CREATE TABLE `type_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text COLLATE utf8_czech_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

INSERT INTO `type_user` (`id`, `name`) VALUES
(1,	'Admin'),
(2,	'User');

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` text COLLATE utf8_czech_ci NOT NULL,
  `pass` text COLLATE utf8_czech_ci NOT NULL,
  `type_user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

INSERT INTO `users` (`id`, `email`, `pass`, `type_user_id`) VALUES
(0,	'neco@neco',	'',	0),
(0,	'neco2@neco',	'',	1);

DROP TABLE IF EXISTS `user_choice`;
CREATE TABLE `user_choice` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `qt` int(11) NOT NULL,
  `inplace` tinyint(4) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;


-- 2025-01-16 09:22:09
