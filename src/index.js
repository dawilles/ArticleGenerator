const fs = require('fs');
const path = require('path');
const openaiClient = require('./openaiClient');

const ARTICLE_PATH = path.join(__dirname, '../data/article.txt');
const OUTPUT_PATH = path.join(__dirname, '../output/artykul.html');

const generateHtmlArticle = async () => {
    try {
        const articleContent = fs.readFileSync(ARTICLE_PATH, 'utf-8');

        const prompt = `
Transform the following article into well-structured HTML content using appropriate tags.
Identify suitable places to insert images; mark them with <img src="image_placeholder.jpg" alt="Detailed prompt for image generation">.
Provide alt attributes with detailed prompts for image generation.
Include captions under images using the appropriate HTML tags.
Do not include any CSS or JavaScript.
Return only the content to be placed between <body> and </body> tags.
Do not include <html>, <head>, or <body> tags.

Article:
${articleContent}
    `;

        const htmlContent = await openaiClient(prompt);

        fs.writeFileSync(OUTPUT_PATH, htmlContent.trim(), 'utf-8');
        console.log(`HTML article has been generated at ${OUTPUT_PATH}`);
    } catch (error) {
        console.error('Error generating HTML article:', error);
    }
};

generateHtmlArticle();