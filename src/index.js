const fs = require('fs');
const path = require('path');
const openaiClient = require('./openaiClient');

// Ścieżki do plików wejściowych i wyjściowych
const ARTICLE_PATH = path.join(__dirname, '../data/article.txt');
const OUTPUT_PATH = path.join(__dirname, '../output/artykul.html');

// Funkcja generująca artykuł HTML
const generateHtmlArticle = async () => {
    try {
        const articleContent = fs.readFileSync(ARTICLE_PATH, 'utf-8');

        const prompt = `
Wygeneruj kod dla artykułu w języku polskim zgodnie z poniższymi wymaganiami:
1. Struktura:
   - Zwrócona zawartość powinien zawierać wyłącznie to co do wstawienia pomiędzy tagami <body> i </body> i nic poza tym. W odpowiedzi tylko tekst, brak backticks.
   - Używaj semantycznych tagów HTML5 (article, section, header itp.)
   - Zachowaj hierarchię nagłówków
   - Grupuj powiązane treści w sekcje
2. Obrazy:
   - Umieść <img> w miejscach wspierających narrację
   - Alt teksty powinny zawierać: 
     * Szczegółowy opis sceny
     * Styl grafiki (np. ilustracja, fotografia)
     * Kluczowe elementy do wygenerowania
   - Użyj src="image_placeholder.jpg"
   - Dodaj <figcaption> z krótkim, kontekstowym opisem
3. Formatowanie:
   - Użyj paragrafów <p> dla tekstu
   - Zachowaj oryginalną strukturę akapitów
   - Nie dodawaj CSS ani JavaScript
Artykuł:
${articleContent}
    `;

        const htmlContent = await openaiClient(prompt);

        fs.writeFileSync(OUTPUT_PATH, htmlContent.trim(), 'utf-8');
        console.log(`HTML article has been generated at ${OUTPUT_PATH}`);
    } catch (error) {
        console.error('Error generating HTML article:', error);
    }
};

// Uruchomienie funkcji generującej artykuł
generateHtmlArticle()
    .then(() => {
        console.log('Article generated successfully.');
    })
    .catch((error) => {
        console.error('Error generating article:', error);
    });
