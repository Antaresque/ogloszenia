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

INSERT INTO `kategorie` (`id_kat`, `id_kat_nad`, `nazwa`, `zdjecie`, `atrybuty`) VALUES
(1, NULL, "Motoryzacja", "motoryzacja.jpg", '["marka", "model", "stan", "rok produkcji"]'),
(2, NULL, "Dom i ogród", "dom.jpg", '["wysokość", "szerokość", "głębokość", "materiał"]'),
(3, NULL, "Praca i usługi", "praca.jpg", '["rodzaj umowy"]'),
(4, NULL, "Elektronika", "elektronika.jpg", '["marka"]'),
(5, NULL, "Ubrania", "ubrania.jpg", '["rozmiar", "materiał"]'),
(6, NULL, "Nieruchomości", "nieruchomosci.jpg", '["powierzchnia"]'),
(7, NULL, "Rolnictwo", "rolnictwo.jpg", '["marka"]'),
(8, NULL, "Zwierzęta", "zwierzeta.jpg", '["materiał"]'),
(9, NULL, "Dla dzieci", "dzieci.jpg", NULL),
(10, NULL, "Sport", "sport.jpg", '["marka"]'),
(11, NULL, "Muzyka i sztuka", "muzyka.jpg", '["marka"]'),
(12, NULL, "Nauka i edukacja", "nauka.jpg", '["wydawca"]'),
(101, 1, "Samochody", NULL, '["ilość drzwi", "przebieg"]'),
(102, 1, "Motocykle i skutery", NULL, '["rodzaj", "przebieg"]'),
(103, 1, "Części samochodowe", NULL, '["rodzaj części"]'),
(201, 2, "Meble ogrodowe", NULL, NULL),
(202, 2, "Meble salonowe", NULL, NULL),
(203, 2, "Meble kuchenne", NULL, NULL),
(301, 3, "Oferty pracy", NULL, NULL),
(302, 3, "Oferty zatrudnienia", NULL, NULL),
(401, 4, "Komputery osobiste",NULL, '["procesor", "ram", "karta graficzna"]'),
(402, 4, "Telefony komórkowe", NULL, '["simlock", "rodzaje połączeń"]'),
(501, 5, "T-shirty", NULL, NULL),
(502, 5, "Spodnie jeansowe", NULL, NULL),
(601, 6, "Domy jednorodzinne", NULL, NULL),
(602, 6, "Apartamenty", NULL, NULL),
(701, 7, "Ciągniki", NULL, '["moc silnika"]'),
(702, 7, "Rozrzutniki obornika", NULL, '["ciśnienie"]'),
(801, 8, "Zabawki dla psów", NULL, NULL),
(802, 8, "Zabawki dla kotów", NULL, NULL),
(901, 9, "Wózki dziecięce", NULL, '["ilość miejsc"]'),
(902, 9, "Grzechotki", NULL, '["materiał"]'),
(1001, 10, "Obuwie sportowe", NULL, '["materiał"]'),
(1002, 10, "Worki treningowe", NULL, '["waga"]'),
(1101, 11, "Gitary akustyczne", NULL, '["rodzaj strun"]'),
(1102, 11, "Stelaże malarskie", NULL, '["max powierzchnia płótna", "materiał"]'),
(1201, 12, "Podręczniki szkolne", NULL, '["przedmiot"]'),
(1202, 12, "Artykułu laboratoryjne", NULL, '["przedmiot"]');

--
-- Zrzut danych tabeli `uzytkownicy`
--

INSERT INTO `uzytkownicy` (`id_uz`, `imie`, `nazwisko`, `adres`, `nr_tel`, `haslo`, `login`, `email`, `funkcja`, `miasto`, `wojewodztwo`, `data_rej`, `data_log`, `o_sobie`) VALUES
(1, 'Janusz', 'Tracz', 'Letnia 20/1', '632543675', '$2y$11$ZsLom.N5w.dW.XzjkqaHPurgwe9xdOS.npZ5IXxE8mBsUB4Z7VJie', 'janusz', 'janusz@wp.pl', 'user', 'Lublin', 'woj. lubelskie', '0000-00-00 00:00:00', NULL, 'Jestem *byznesmenem* i szefem prosperującej firmy zajmującej się głównie handlem passatami.'),
(2, 'user', 'user', 'uszwica1', '333333', '$2y$11$5Dyl3FGRQ4BBGPdfBZ2eD.D5Q.SAi4/ryYql6arEJVNF/Af7jb0YO', 'uzytkownik1', 'jajusz@jajusz.pl', 'user', 'uszwice', 'woj. śląskie', '2017-11-26 16:29:25', NULL, 'Jestem zwyczajnym przykładowym użytkownikiem tego serwisu, autor nie miał pomysłu na szczegółowe dane użytkowników.'),
(3, 'Sergiusz', 'Surow', 'Jesienna 21/2', '77668855', '$2y$11$hL.X2FQqUuqYbLZ6tbGaf.UQSsSTPiSPgzjqGBUJUdy84OSEPtdYW', 'uczen', 'uczen@janusz.pl', 'user', 'Lodowice', 'woj. pomorskie', '2017-11-29 17:28:12', NULL, 'Jestem rosyjskim imigrantem, który przyjechał do polski w poszukiwaniu pierogów.'),
(4, 'Administrator', 'Serwisu', 'Jeja.pl', '99880077', '$2y$11$IKgxrfQcz7OYgvvHjSRVzOsNXHKQ/tkBBwPYLLMAkWJSU6lZnZHtq', 'admin', 'admin@gmail.com', 'admin', 'Internet', 'Region', '2017-11-29 17:30:12', NULL, 'Jestem przykładowym administratorem serwisu, ale nie wiadomo nawet, czy będę pełnił tutaj jakąś funkcję z powodu braku czasu na dodanie panelu administratora.'),
(5, 'Tajny', 'Tajniak', 'Tajne', 'Tajny', '$2y$11$6FKUMzEdof4ZTJ4cDK8lsuvGZlU8In9B9DUsCBMyaTQMcvGctZgaK', 'tajny', 'tajny@email.com', 'admin', 'Tajne', 'Region', '2017-11-29 17:31:13', NULL, 'Nikt nie musi tego wiedzieć.');


--
-- Zrzut danych tabeli `ogloszenia`
--

INSERT INTO `ogloszenia` (`id_og`, `id_uz`, `id_kat`, `nazwa`, `cena`, `data_wys`, `data_wyg`, `email_wys`, `nr_tel_wys`, `opis`, `wojewodztwo`, `miasto`, `adres`,`promowane`, `aktywne`, `zdjecie`, `atrybuty`) VALUES
(1, 1, 1, "Sprzedam opla", "500.00", "2017-11-21 19:52:15", "2017-12-21 19:52:15", "janusz@wp.pl", "653434212", "sprzedam opla nie bity nie stukany na oko rocznik 2010, mały przebieg cena do nego kontakt na priv wymienie za 2 swiezaki dla horej curki", "mazowieckie", "siedlce", "sekulska 4","0" ,"1", "1-0.jpg", '["Opel", "Insignia", "używany", "2010", "5", "100000"]'),
(2, 1, 1, "Sprzedam opla corse b rocznik 1998", "800.00", "2017-11-29 19:02:20", "2017-12-29 19:02:20", "janusz@wp.pl", "65434212", "Sprzedam opla corse nie bity nie stukany rocznik 1998 wszystkie papiery na miejscu, cena do negocjacji, brak możliwości wymiany za świerzaki", "mazowieckie", "siedlce", "sekulska 5", "1", "1", "2-0.jpg", '["Opel", "Corsa B", "używany", "1998", "3", "400000"]'),
(3, 1, 2, "Piękna ławeczka ogrodowa", "250.00", "2017-11-30 21:02", "2017-12-30 21:02", "janusz@wp.pl", "654545212", "sprzedam piękną ławeczkę ogrodową, nie klepana, mały przebieg, jedna deska nadpęknięta bo raz teściowa usiadła mimo zakazu", "mazowieckie", "siedlce", "sekulska 6", "0", "1", "3-0.jpg", '["60", "200", "40"]'),
(4, 2, 2, "Stół kuchenny idealny do krojenia mięsa", "300.00", "2017-12-02 19:08:45", "2018-01-02 19:08:45",, "uczeń@wp.pl", "675849301", "Sprzedam piękny stół kuchenny, lekkie ślady używania, idealny do krojenia mięs rodzaju wszelakiego", "mazowieckie", "siedlce", "sienkiewicza 3", "1", "1", "4-0.jpg", '["110", "180", "140"]'),
(5, 2, 4, "Laptok marki DY chyba dobry, lekko używany, ślady soku na klawiaturze", "500.00", "2017-12-02 19:15:01", "2018-01-02 19:15:01", "uczeń@wp.pl", "675849301", "Sprzedam laptoka syna, dostał szlaban za palenie trawki, laprok marki DY, chyba działa, ale się nie znam, wylałam przypadkiem sok malinowy na klawiaturę, ale to chyba nic poważnego", "mazowieckie", "siedlce", "sienkiewicza 3", "1", "1", "5-0.jpg", '["DY", "chyba dobry", "dużo", "3d"]'),
(6, 3, 4, "Telefon ajfon 7 wygrany w konkursie, brak papierów ani pudełka, ale całkowicie nie kradziony", "4000.00", "2017-12-02 19:18:32", "2018-01-02 19:18:32", "nieuczeń@wp.pl", "675849301", "Sprzedam nowiutkiego ajfona 7 koloru złotego, został on przeze mnie wygrany w konkursie, przez co nie mam pudełka, papierów, ładowarki ani książeczki gwanrancyjnej, ale nie jest on kradziony, co to to nie, ja uczciwy chop jestem", "mazowieckie", "siedlce", "sienkiewicza 3", "1", "1", "6-0.jpg", '["Apple", "chyba nie", "wszystkie"]'),
(7, 3, 5, "Nowiutki zegarek rolex platynowy wysadzany rubinami i topazem, TANIO", "150000.00", "2017-12-02 19:23:41", "2018-01-02 19:23:41", "nieuczeń@wp.pl", "675849301", "Sprzedam tanio nowego rolexa platynowego wysadzanego różnymi kamieniami, nietrafiony prezent, syn chciał szmaragdy zamiast rubinów", "mazowieckie", "siedlce", "sienkiewicza 3", "1", "1", "7-0.jpg", '["do regulacji", "platyna"]'),
(8, 4, 5, "Niewidzialna bluza niewidka", "10000.00", "2017-12-02 20:43:21", "2018-01-02 20:43:21", "nieuczeń@wp.pl", "793046271", "Sprzedam niewidzialną bluzę niewidkę, nie widać jej, ale to dlatego, że jest niewidzialna, no scam legit 100%", "mazowieckie", "siedlce", "sienkiewicza 4", "1", "1", "8-0.jpg", '["dowolny", "magiczna bawełna"]'),
(9, 4, 6, "Piękna szkoła, niedawno remontowana", "1500000.00", "2017-12-02 20:45:22", "2018-01-02 20:45:22", "moeuczeń@wp.pl", "590375960", "Sprzedam szkołę, nie lubię jej, ale może komuś się spodoba, ogólnie to jest dosyć stara, ale niedawno ją remontowali, a jeszcze wcześniej dodali nowy budynek i połączyli ze starym)", "mazowieckie", "siedlce", "konarkiego 11", "1", "1", "9-0.jpg", '["10000"]'),
(10, 5, 6, "Ładny czerwony kościół (samochody nie są w zestawie)", "1000000.00", "2017-12-02 20:49:12", "2018-01-02 20:49:12", "moeuczeń@wp.pl", "578305728", "Sprzedam ładny czerony kościół, z założenia katolicki, ale można go w razie potrzeb przekształcić na meczet, niedawno odmalowano dach", "mazowieckie", "siedlce", "monte cassino, kościół pod wezwaniem Bożego Ciała", "1", "1", "10-0.jpg", '["2000"]'),
(11, 5, 7, "Prawie nieużywany rozrzutnik gnoju, wymaga czyszczenia, lekko wadliwy", "60000.00", "2017-12-02 20:51:55", "2018-01-02 20:51:55", "moeuczeń@wp.pl", "593750679", "Sprzedam rozrzutnik gnoju, wymaga czyszczenia, lekko wadliwy, a mianowicie towar rozrzucany zamiast przez otwór wylotowy na pole dostaje się do kabiny, poza tym działa dobrze", "mazowieckie", "siedlce", "monte cassino 36/19", "1", "1", "11-0.jpg", '["Ursus", "bardzo wysokie"]'),
(12, 1, 9, "Zabawka dla dziecka, pluszowy lis pirat", "19.87", "2017-12-03 11:58:34", "2018-01-03 11:58:34", "moeuczeń@wp.pl", "583750476", "Sprzedam zabawkę dla dziecka, jest to pluszowy lis pirat, stan idealny - był to nietrafiony prezent, ciotka pomyślała, że dawanie pluszaka 14-letniemu Brajankowi to dobry pomysł", "mazowieckie", "siedlce", "słowackiego 5", "0", "1", "12-0.jpg", '["plusz"]');

--
-- Zrzut danych tabeli `wiadomosci`
--

INSERT INTO `wiadomosci` (`id_wiad`, `id_od`, `id_nad`, `tresc`, `data`, `tytul`, `id_og`, `odczytane`) VALUES
(1, 1, 2, 'Witam panie Januszu. Mam pytanie co do Opla corsy. Czy on aby na pewno nie był klepany?', '2017-12-03 20:02:22', 'Opel', 2, '1'),
(2, 2, 1, 'Pan mie tu nie obraża, oczywiście, że nie klepany, ja to uczciwy człowiek jestem. Kupujesz pan czy nie?', '2017-12-03 20:03:44', 'Klepanko', 2, '0');



COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
