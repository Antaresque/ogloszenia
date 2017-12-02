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

INSERT INTO `kategorie` (`id_kat`, `id_kat_nad`, `nazwa`,`atrybuty`, `zdjecie`) VALUES
(1, NULL, 'Motoryzacja','["Marka","Model","Rok produkcji","Stan"]', 'motoryzacja.jpg'),
(2, NULL, 'Dom i ogród',NULL, 'dom.jpg'),
(3, NULL, 'Praca i usługi',NULL, 'praca.jpg'),
(4, NULL, 'Elektronika',NULL, 'elektronika.jpg'),
(5, NULL, 'Ubrania',NULL, 'ubrania.jpg'),
(6, NULL, 'Nieruchomości',NULL, 'nieruchomosci.jpg'),
(7, NULL, 'Rolnictwo',NULL, 'rolnictwo.jpg'),
(8, NULL, 'Zwierzęta',NULL, 'zwierzeta.jpg'),
(9, NULL, 'Dla dzieci',NULL, 'dzieci.jpg'),
(10, NULL, 'Sport',NULL, 'sport.jpg'),
(11, NULL, 'Muzyka i sztuka',NULL, 'muzyka.jpg'),
(12, NULL, 'Nauka i edukacja',NULL, 'nauka.jpg'),
(101, 1, 'Samochody','["Typ nadwozia","Pojemność i typ silnika","Moc","Przebieg"]', NULL),
(102, 1, 'Motocykle i skutery','["Pojemność silnika","Moc","Przebieg"]', NULL),
(103, 1, 'Części samochodowe','["Rodzaj części"]', NULL),
(201, 2, 'Meble ogrodowe',NULL, NULL),
(202, 2, 'Meble salonowe',NULL, NULL),
(203, 2, 'Meble kuchenne',NULL, NULL),
(301, 3, 'Oferty pracy',NULL, NULL),
(302, 3, 'Oferty zatrudnienia',NULL, NULL),
(401, 4, 'Komputery osobiste', NULL,NULL),
(402, 4, 'Telefony komórkowe',NULL, NULL),
(501, 5, 'T-shirty',NULL, NULL),
(502, 5, 'Spodnie jeansowe',NULL, NULL),
(601, 6, 'Domy jednorodzinne',NULL, NULL),
(602, 6, 'Apartamenty',NULL, NULL),
(701, 7, 'Ciągniki',NULL, NULL),
(702, 7, 'Rozrzutniki obornika',NULL, NULL),
(801, 8, 'Zabawki dla psów',NULL, NULL),
(802, 8, 'Zabawki dla kotów',NULL, NULL),
(901, 9, 'Wózki dziecięce',NULL, NULL),
(902, 9, 'Grzechotki',NULL, NULL),
(1001, 10, 'Obuwie sportowe',NULL, NULL),
(1002, 10, 'Worki treningowe',NULL, NULL),
(1101, 11, 'Gitary akustyczne',NULL, NULL),
(1102, 11, 'Stelaże malarskie',NULL, NULL),
(1201, 12, 'Podręczniki szkolne',NULL, NULL),
(1202, 12, 'Artykułu laboratoryjne',NULL, NULL);

--
-- Zrzut danych tabeli `uzytkownicy`
--

INSERT INTO `uzytkownicy` (`id_uz`, `imie`, `nazwisko`, `adres`, `nr_tel`, `haslo`, `login`, `email`, `funkcja`, `miasto`, `wojewodztwo`, `data_rej`, `data_log`) VALUES
(1, 'Janusz', 'Tracz', 'Letnia 20/1', '632543675', '$2y$11$ZsLom.N5w.dW.XzjkqaHPurgwe9xdOS.npZ5IXxE8mBsUB4Z7VJie', 'janusz', 'janusz@wp.pl', 'user', 'Lublin', 'woj. lubelskie', '0000-00-00 00:00:00', NULL),
(2, 'user', 'user', 'uszwica1', '333333', '$2y$11$5Dyl3FGRQ4BBGPdfBZ2eD.D5Q.SAi4/ryYql6arEJVNF/Af7jb0YO', 'uzytkownik1', 'jajusz@jajusz.pl', 'user', 'uszwice', 'woj. śląskie', '2017-11-26 16:29:25', NULL),
(3, 'Sergiusz', 'Surow', 'Jesienna 21/2', '77668855', '$2y$11$hL.X2FQqUuqYbLZ6tbGaf.UQSsSTPiSPgzjqGBUJUdy84OSEPtdYW', 'uczen', 'uczen@janusz.pl', 'user', 'Lodowice', 'woj. pomorskie', '2017-11-29 17:28:12', NULL),
(4, 'Administrator', 'Serwisu', 'Jeja.pl', '99880077', '$2y$11$IKgxrfQcz7OYgvvHjSRVzOsNXHKQ/tkBBwPYLLMAkWJSU6lZnZHtq', 'admin', 'admin@gmail.com', 'admin', 'Internet', 'Region', '2017-11-29 17:30:12', NULL),
(5, 'Tajny', 'Tajniak', 'Tajne', 'Tajny', '$2y$11$6FKUMzEdof4ZTJ4cDK8lsuvGZlU8In9B9DUsCBMyaTQMcvGctZgaK', 'tajny', 'tajny@email.com', 'admin', 'Tajne', 'Region', '2017-11-29 17:31:13', NULL);


--
-- Zrzut danych tabeli `ogloszenia`
--

INSERT INTO `ogloszenia` (`id_og`, `id_uz`, `id_kat`, `nazwa`, `cena`, `data_wys`, `email_wys`, `nr_tel_wys`, `opis`, `wojewodztwo`, `miasto`, `adres`,`promowane`, `aktywne`, `zdjecie`) VALUES
(1, 1, 1, 'Sprzedam opla', '500.00', '2017-11-21 19:52:15', 'janusz@wp.pl', '653434212', 'sprzedam opla nie bity nie stukany na oko rocznik 2001, mały przebieg cena do nego kontakt na priv wymienie za 2 swiezaki dla horej curki', 'mazowieckie', 'siedlce', 'sekulska 4','0' ,'1', '1-0.jpg'),
(2, 1, 1, 'Sprzedam opla corse b rocznik 1998', '800.00', '2017-11-29 19:02:20', 'janusz@wp.pl', '65434212', 'Sprzedam opla corse nie bity nie stukany rocznik 1998 wszystkie papiery na miejscu, cena do negocjacji, brak możliwości wymiany za świerzaki', 'mazowieckie', 'siedlce', 'sekulska 5', '1', '1', '2-0.jpg')
(3, 1, 2, 'Piękna ławeczka ogrodowa', '250.00', '2017-11-30 21:02' 'janusz@wp.pl', '654545212', 'sprzedam piękną ławeczkę ogrodową, nie klepana, mały przebieg, jedna deska nadpęknięta bo raz teściowa usiadła mimo zakazu', 'mazowieckie', 'siedlce', 'sekulska 6', '0', '1', '3-0.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
