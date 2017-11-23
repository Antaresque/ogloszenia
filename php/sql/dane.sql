-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 21 Lis 2017, 23:11
-- Wersja serwera: 10.1.26-MariaDB
-- Wersja PHP: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `serwis`
--

--
-- Zrzut danych tabeli `atrybuty`
--

INSERT INTO `atrybuty` (`id_at`, `id_kat`, `nazwa`) VALUES
(1, 1, 'stan używania'),
(2, 2, 'coś tam'),
(3, 101, 'mądry atrybut');

--
-- Zrzut danych tabeli `kategorie`
--

INSERT INTO `kategorie` (`id_kat`, `id_kat_nad`, `nazwa`) VALUES
(1, NULL, 'Motoryzacja'),
(2, NULL, 'Elektronika'),
(3, NULL, 'Zwierzęta'),
(4, NULL, 'Sport'),
(5, NULL, 'Muzyka'),
(101, 1, 'Samochody'),
(102, 1, 'Motocykle i skutery'),
(103, 1, 'Części samochodowe');

--
-- Zrzut danych tabeli `uzytkownicy`
--

INSERT INTO `uzytkownicy` (`id_uz`, `imie`, `nazwisko`, `adres`, `nr_tel`, `haslo`, `login`, `email`, `miasto`, `wojewodztwo`, `data_rej`, `data_log`) VALUES
(1, 'Janusz', 'Tracz', 'Letnia 20/1', '632543675', '$2y$11$ZsLom.N5w.dW.XzjkqaHPurgwe9xdOS.npZ5IXxE8mBsUB4Z7VJie', 'janusz', 'janusz@wp.pl', 'Lublin', 'woj. lubelskie', '0000-00-00 00:00:00', NULL);

--
-- Zrzut danych tabeli `ogloszenia`
--

INSERT INTO `ogloszenia` (`id_og`, `id_uz`, `id_kat`, `nazwa`, `cena`, `data_wys`, `email_wys`, `nr_tel_wys`, `opis`) VALUES
(1, 1, 1, 'Sprzedam opla', '500.00', '2017-11-21 19:52:15', 'janusz@wp.pl', '653434212', 'sprzedam opla nie bity nie stukany na oko rocznik 2001, mały przebieg cena do nego kontakt na priv wymienie za 2 swiezaki');

--
-- Zrzut danych tabeli `zdjecia`
--

INSERT INTO `zdjecia` (`id_zdj`, `nazwa`, `id_og`) VALUES
(1, 'kot2.jpg', 1),
(2, 'kot3.jpg', 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
