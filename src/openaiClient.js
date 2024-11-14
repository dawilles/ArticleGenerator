require('dotenv').config();
const axios = require('axios');

const openaiClient = async (prompt) => {
    const apiKey = process.env.OPENAI_API_KEY;
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
    };

    const data = {
        model: 'gpt-4o',
        messages: [{ role: 'user', content: prompt }],
    };

    try {
        const response = await axios.post(apiUrl, data, { headers });
        const content = response.data.choices[0].message.content;
        return content;
    } catch (error) {
        console.error('Error communicating with OpenAI API:', error.response ? error.response.data : error.message);
        throw error;
    }
};
module.exports = openaiClient;
