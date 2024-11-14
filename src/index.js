const fs = require("fs");
const path = require("path");
const completeChat = require("./completeChat");

// Ścieżki do plików wejściowych i wyjściowych
const ARTICLE_PATH = path.join(__dirname, "../data/article.txt");
const OUTPUT_PATH = path.join(__dirname, "../output/artykul.html");
const SYSTEM_PROMPT = `Wygeneruj kod dla artykułu w języku polskim zgodnie z poniższymi wymaganiami:
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
   - Nie dodawaj CSS ani JavaScript`;

// Funkcja generująca artykuł HTML
const generateHtmlArticle = async () => {
  try {
    const articleContent = fs.readFileSync(ARTICLE_PATH, "utf-8");
    const userMessage = `Artykuł:
${articleContent}`;
    const htmlContent = await completeChat({
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userMessage },
      ],
      model: "gpt-4o",
    });
    fs.writeFileSync(OUTPUT_PATH, htmlContent.trim(), "utf-8");
    console.log(`HTML article has been generated at ${OUTPUT_PATH}`);
  } catch (error) {
    console.error("Error generating HTML article:", error);
  }
};

generateHtmlArticle()
  .then(() => {
    console.log("Article generated successfully.");
  })
  .catch((error) => {
    console.error("Error generating article:", error);
  });
