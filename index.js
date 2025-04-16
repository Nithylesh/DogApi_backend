require('dotenv').config(); // <-- load .env variables
const cors = require('cors');

const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

const DOG_API_URL = process.env.DOG_API_URL;
app.use(cors()); // 👈 This enables CORS for all origins


app.get('/random-dog', async (req, res) => {
  try {
    const response = await axios.get(DOG_API_URL);
    res.json(response.data.url);
    //console.log(response.data.url); // Log the dog image URL to the console
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch dog image' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
