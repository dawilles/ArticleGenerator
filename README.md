# Prosta Aplikacja AI Generująca Artykuł HTML

Aplikacja napisana w JavaScript, umożliwiająca:

- **Integrację z API OpenAI** – Wykorzystanie modelu GPT-4 do przetwarzania treści artykułu.
- **Odczyt pliku tekstowego** – Pobranie treści z `data/article.txt`.
- **Generowanie kodu HTML** – Wysyłanie treści artykułu z odpowiednim promptem do API OpenAI i tworzenie sformatowanego dokumentu HTML.
- **Zapis wyniku** – Gotowy artykuł w formacie HTML zapisuje się w pliku `output/artykul.html`.

Aplikacja dodatkowo umożliwia podgląd wygenerowanego artykułu za pomocą szablonu HTML.

---

## Wymagania

- **Node.js** (wersja 14 lub nowsza)
- **Konto OpenAI** z aktywnym kluczem API

---

## Instrukcja Uruchomienia

1. **Sklonuj repozytorium**:
   ```bash
   git clone <URL_REPOZYTORIUM>
   cd project-root
   ```

2. **Zainstaluj zależności**:
   ```bash
   npm install
   ```

3. **Skonfiguruj klucz API OpenAI**:
    - Utwórz plik `.env` w katalogu głównym projektu.
    - Dodaj do niego swój klucz API w następującej postaci:
      ```plaintext
      OPENAI_API_KEY=twój_klucz_api
      ```

4. **Uruchom aplikację**:
   ```bash
   node src/index.js
   ```
   Po uruchomieniu w folderze `output/` zostanie wygenerowany plik `artykul.html`.

---

## Podgląd Artykułu

### Opcje:
1. **Otwórz plik `output/artykul.html`** w przeglądarce (zawiera tylko treść `<body>`).
2. **Wklej treść do szablonu**:
    - Skopiuj zawartość `artykul.html`.
    - Wklej między tagi `<body>` w pliku `output/szablon.html`.
    - Otwórz plik w przeglądarce.
3. **Gotowy podgląd**:
    - Skorzystaj z pliku `output/podglad.html`, który zawiera już wklejoną treść artykułu.

---

## Struktura Plików

- **`src/openaiClient.js`**: Funkcja obsługująca komunikację z API OpenAI.
- **`src/index.js`**: Główny plik aplikacji, realizujący logikę działania.
- **`output/szablon.html`**: Szablon HTML z załączonym Tailwind CSS do stylizacji.
- **`output/podglad.html`**: Plik z pełnym podglądem wygenerowanego artykułu.

---

## Uwagi

W razie pytań lub problemów z uruchomieniem aplikacji, proszę o kontakt poprzez zgłoszenie issue w repozytorium.
