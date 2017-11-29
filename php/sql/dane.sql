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
-- Zrzut danych tabeli `kategorie`
--

INSERT INTO `kategorie` (`id_kat`, `id_kat_nad`, `nazwa`) VALUES
(1, NULL, 'Motoryzacja'),
(2, NULL, 'Dom i ogród'),
(3, NULL, 'Praca i usługi'),
(4, NULL, 'Elektronika'),
(5, NULL, 'Ubrania'),
(6, NULL, 'Nieruchomości'),
(7, NULL, 'Rolnictwo'),
(8, NULL, 'Zwierzęta'),
(9, NULL, 'Dla dzieci'),
(10, NULL, 'Sport'),
(11, NULL, 'Muzyka i sztuka'),
(12, NULL, 'Nauka i edukacja'),
(101, 1, 'Samochody'),
(102, 1, 'Motocykle i skutery'),
(103, 1, 'Części samochodowe'),
(201, 2, 'Meble ogrodowe'),
(202, 2, 'Meble salonowe'),
(203, 2, 'Meble kuchenne'),
(301, 3, 'Oferty pracy'),
(302, 3, 'Oferty zatrudnienia'),
(401, 4, 'Komputery osobiste'),
(402, 4, 'Telefony komórkowe'),
(501, 5, 'T-shirty'),
(502, 5, 'Spodnie jeansowe'),
(601, 6, 'Domy jednorodzinne'),
(602, 6, 'Apartamenty'),
(701, 7, 'Ciągniki'),
(702, 7, 'Rozrzutniki obornika'),
(801, 8, 'Zabawki dla psów'),
(802, 8, 'Zabawki dla kotów'),
(901, 9, 'Wózki dziecięce'),
(902, 9, 'Grzechotki'),
(1001, 10, 'Obuwie sportowe'),
(1002, 10, 'Worki treningowe'),
(1101, 11, 'Gitary akustyczne'),
(1102, 11, 'Stelaże malarskie'),
(1201, 12, 'Podręczniki szkolne'),
(1202, 12, 'Artykułu laboratoryjne');

--
-- Zrzut danych tabeli `uzytkownicy`
--

INSERT INTO `uzytkownicy` (`id_uz`, `imie`, `nazwisko`, `adres`, `nr_tel`, `haslo`, `login`, `email`, `funkcja`, `miasto`, `wojewodztwo`, `data_rej`, `data_log`, `nazwa_banku`, `nr_konta_bank`) VALUES
(1, 'Janusz', 'Tracz', 'Letnia 20/1', '632543675', '$2y$11$ZsLom.N5w.dW.XzjkqaHPurgwe9xdOS.npZ5IXxE8mBsUB4Z7VJie', 'janusz', 'janusz@wp.pl', 'user', 'Lublin', 'woj. lubelskie', '0000-00-00 00:00:00', NULL, 'bank wschodni gbr', '772266335544'),
(2, 'user', 'user', 'uszwica1', '333333', '$2y$11$5Dyl3FGRQ4BBGPdfBZ2eD.D5Q.SAi4/ryYql6arEJVNF/Af7jb0YO', 'uzytkownik1', 'jajusz@jajusz.pl', 'user', 'uszwice', 'woj. śląskie', '2017-11-26 16:29:25', NULL, 'YayushBank', '$2y$11$/ytLRo.3bDxlmohkdosbveZ6u4K54bcNDFo/k.gA.I6'),
(3, 'Sergiusz', 'Surow', 'Jesienna 21/2', '77668855', '$2y$11$hL.X2FQqUuqYbLZ6tbGaf.UQSsSTPiSPgzjqGBUJUdy84OSEPtdYW', 'uczen', 'uczen@janusz.pl', 'user', 'Lodowice', 'woj. pomorskie', '2017-11-29 17:28:12', NULL, 'Pekało', '$2y$11$7TSWFxgTxuFu5Am/OQiKcuGGA1h.XvJLYnk8baQeid3'),
(4, 'Administrator', 'Serwisu', 'Jeja.pl', '99880077', '$2y$11$IKgxrfQcz7OYgvvHjSRVzOsNXHKQ/tkBBwPYLLMAkWJSU6lZnZHtq', 'admin', 'admin@gmail.com', 'admin', 'Internet', 'Region', '2017-11-29 17:30:12', NULL, 'uczniowski', '$2y$11$sTqEy5zdZqaet0kYL9j7pupK6qM/gLz/pRNf46j1FV7'),
(5, 'Tajny', 'Tajniak', 'Tajne', 'Tajny', '$2y$11$6FKUMzEdof4ZTJ4cDK8lsuvGZlU8In9B9DUsCBMyaTQMcvGctZgaK', 'tajny', 'tajny@email.com', 'admin', 'Tajne', 'Region', '2017-11-29 17:31:13', NULL, 'Tajne', '$2y$11$//pI0rD0DS20qyQMSzb8s.XOW5BN/9glV9vj38Fr0re');


--
-- Zrzut danych tabeli `ogloszenia`
--

INSERT INTO `ogloszenia` (`id_og`, `id_uz`, `id_kat`, `nazwa`, `cena`, `data_wys`, `email_wys`, `nr_tel_wys`, `opis`, `wojewodztwo`, `miasto`, `adres`,`promowane`, `aktywne`, `zdjecie`) VALUES
(1, 1, 1, 'Sprzedam opla', '500.00', '2017-11-21 19:52:15', 'janusz@wp.pl', '653434212', 'sprzedam opla nie bity nie stukany na oko rocznik 2001, mały przebieg cena do nego kontakt na priv wymienie za 2 swiezaki dla horej curki', 'mazowieckie', 'siedlce', 'sekulska 4','0' ,'1', '1-0.jpg'),
(2, 1, 1, 'Sprzedam opla corse b rocznik 1998', '800.00', '2017-11-29 19:02:20', 'janusz@wp.pl', '65434212', 'Sprzedam opla corse nie bity nie stukany rocznik 1998 wszystkie papiery na miejscu, cena do negocjacji, brak możliwości wymiany za świerzaki', 'mazowieckie', 'siedlce', 'sekulska 5', '1', '1', '2-0.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
