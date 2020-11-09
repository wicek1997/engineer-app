import React from 'react';

export function Home() {
  return (
    <div>
        <h1>About Page</h1>
        <p>W ramach pracy zostaną przedstawione założenia oraz implementacja platformy do analizy błędów, 
            pobierania zestawień błędów w całym okresie działania aplikacji lub w wybranym okresie, analiza wraz z wykresami ilości błędów i stopnia powagi błędu. 
            Integracja własnych webhooków i integracja z aplikacjami firm trzecich np. Telegram. Integracja z projektem za pomocą SDK
            Praca polega na zaprojektowaniu i wykonaniu warstwy frontend i backend platformy do analizy błędów, zintegrowaniu ich ze sobą, 
            wykonaniu SDK do PHP i innych wybranych języków(wstępnie java/kotlin, C#). Poszczególne moduły: zarządzanie kontem użytkownika, autoryzacja, administrowaniem projektu(członkowie i ich prawa), podgląd ilości i rodzaju błędów w poszczególnych projektach, pobieranie zestawień, rysowanie wykresów na podstawie podanych kryteriów, integracja aplikacji firm trzecich, integracja własnych webhooków.
        </p>
    </div>
  );
}
