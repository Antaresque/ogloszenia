<?php
// funkcja do dopisywania wiadomości
$msg_arr = array(
  'NO_RESULTS' => 'Brak wyników',                                                    // brak wyników
  'FILE_NOT_FOUND' => 'Nie znaleziono tabeli',                        // nie znaleziono pliku/tabeli
  'UNDEFINED_FUNCTION' => 'Nieznana funkcja',                // jeżeli nie znaleziono żadnej funkcji
  'LOGIN_NOT_FOUND' => 'Nieprawidłowy login/hasło', // nie znaleziono podanego loginu w bazie danych
  'WRONG_PASS' => 'Nieprawidłowy login/hasło',                                   // podano złe hasło
  'LOGIN_TAKEN' => 'Login jest już zajęty',                         // zajęty login przy rejestracji
  'EMAIL_TAKEN' => 'E-mail jest już zajęty',                       // zajęty e-mail przy rejestracji
  'UNKNOWN_AUTHFUNCTION' => 'Błąd podczas logowania, spróbuj ponownie',                       // ???
  'TEST' => 'testowy błąd nr 1',
  "DELETE_ERROR" => "Błąd przy usuwaniu",
  'CATEGORY_NOT_FOUND' => 'Nie znalzeiono kategorii',
  'USER_NOT_FOUND' => 'Nie znaleziono takiego użytkownika',
  'INSERT_FAIL' => 'Błąd przy dodawaniu',
  'UPDATE_FAIL' => 'Błąd przy zmienianiu',
  'UPDATE_EMAIL_IS_SAME' => 'Podany e-mail jest identyczny z wcześniejszym',
  'UPDATE_PASS_IS_SAME' => 'Błąd zmiany hasła',
  'WRONG_MAIL' => 'Nieprawidłowy mail',
  'ACCOUNT_NOT_ACTIVE' => 'Konto nieaktywne, potwierdź swój mail poprzez link aktywacyjny.'
);

function error_message($value, $code = 404) {
  global $msg_arr, $result;
  // WIADOMOŚCI DO ERRORÓW TAM ^^^^^

  http_response_code($code);

  $result[] = $msg_arr[$value];
}
