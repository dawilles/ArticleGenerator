require("dotenv").config();
const axios = require("axios");

// Funkcja komunikująca się z API OpenAI
const completeChat = async ({ model, messages }) => {
  const apiKey = process.env.OPENAI_API_KEY;
  const apiUrl = "https://api.openai.com/v1/chat/completions";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };

  try {
    const response = await axios.post(
      apiUrl,
      {
        model,
        messages,
      },
      { headers },
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(
      "Error communicating with OpenAI API:",
      error.response ? error.response.data : error.message,
    );
    throw error;
  }
};
module.exports = completeChat;
