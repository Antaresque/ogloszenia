-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 18 Lis 2017, 14:57
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

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `kategorie`
--

CREATE TABLE `kategorie` (
  `id_kat` int(11) NOT NULL,
  `id_kat_nad` int(11) NULL,
  `nazwa` varchar(50) NOT NULL,
  `zdjecie` varchar(50) NULL,
  `atrybuty` varchar(200) DEFAULT '[]'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `ogloszenia`
--

CREATE TABLE `ogloszenia` (
  `id_og` int(11) NOT NULL,
  `id_uz` int(11) NOT NULL,
  `id_kat` int(11) NOT NULL,
  `nazwa` varchar(100) NOT NULL,
  `cena` decimal(10,2) NOT NULL,
  `data_wys` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `data_wyg` timestamp,
  `email_wys` varchar(50) NOT NULL,
  `nr_tel_wys` varchar(15) NOT NULL,
  `opis` varchar(1500) NOT NULL,
  `wojewodztwo` varchar(100) NOT NULL,
  `miasto` varchar(100) NOT NULL,
  `adres` varchar(100) NOT NULL,
  `promowane` tinyint(1) DEFAULT 0,
  `zdjecie` varchar(50),
  `atrybuty` varchar(200) DEFAULT '[]'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uzytkownicy`
--

CREATE TABLE `uzytkownicy` (
  `id_uz` int(11) NOT NULL,
  `imie` varchar(50) NOT NULL,
  `nazwisko` varchar(50) NOT NULL,
  `adres` varchar(50) NOT NULL,
  `nr_tel` varchar(15) DEFAULT NULL,
  `haslo` varchar(100) NOT NULL,
  `login` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `funkcja` varchar(20) DEFAULT 'user',
  `miasto` varchar(50) NOT NULL,
  `wojewodztwo` varchar(50) NOT NULL,
  `data_rej` timestamp DEFAULT CURRENT_TIMESTAMP,
  `obserwowane` varchar(255) DEFAULT '[]',
  `o_sobie` varchar(1500),
  `aktywny` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `wiadomosci`
--

CREATE TABLE `wiadomosci` (
  `id_wiad` int(11) NOT NULL,
  `id_od` int(11) NOT NULL,
  `id_nad` int(11) NOT NULL,
  `tresc` varchar(512) NOT NULL,
  `data` timestamp NOT NULL,
  `tytul` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;
 
-- --------------------------------------------------------

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `kategorie`
--
ALTER TABLE `kategorie`
  ADD PRIMARY KEY (`id_kat`);

--
-- Indexes for table `ogloszenia`
--
ALTER TABLE `ogloszenia`
  ADD PRIMARY KEY (`id_og`),
  ADD KEY `ogl_uz` (`id_uz`),
  ADD KEY `ogl_kat` (`id_kat`);

--
-- Indexes for table `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  ADD PRIMARY KEY (`id_uz`);

--
-- Indexes for table `wiadomosci`
--
ALTER TABLE `wiadomosci`
  ADD PRIMARY KEY (`id_wiad`);


--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `ogloszenia`
--
ALTER TABLE `ogloszenia`
  MODIFY `id_og` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT dla tabeli `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  MODIFY `id_uz` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT dla tabeli `wiadomosci`
--
ALTER TABLE `wiadomosci`
  MODIFY `id_wiad` int(11) NOT NULL AUTO_INCREMENT;
--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `ogloszenia`
--
ALTER TABLE `ogloszenia`
  ADD CONSTRAINT `ogl_kat` FOREIGN KEY (`id_kat`) REFERENCES `kategorie` (`id_kat`),
  ADD CONSTRAINT `ogl_uz` FOREIGN KEY (`id_uz`) REFERENCES `uzytkownicy` (`id_uz`);
COMMIT;

--
-- tu na razie jest widok ale będzie tablica (raczej nie)
--

CREATE VIEW ogloszenia_detailed AS
	SELECT ogloszenia.*, uzytkownicy.login as nazwa_uz, kategorie.nazwa as nazwa_kat
    FROM ogloszenia
    	INNER JOIN kategorie ON ogloszenia.id_kat = kategorie.id_kat
      INNER JOIN uzytkownicy ON ogloszenia.id_uz = uzytkownicy.id_uz;

--
-- drugi widok na archiwum
--

CREATE VIEW ogloszenia_detailed_notarchived AS
	SELECT ogloszenia_detailed.*
  FROM ogloszenia_detailed
  WHERE data_wyg > NOW();

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
