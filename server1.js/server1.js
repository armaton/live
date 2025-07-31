const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();
require('dotenv').config();
const apiKey = process.env.V6vsnGVv6VKzmsjCWIlsXeugIogJD3CL;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/stock', async (req, res) => {
  const symbol = req.query.symbol || 'SCOM.KE'; // Safaricom

  try {
    const apiUrl = `https://api.twelvedata.com/price?symbol=${NSE.SCOM}&apikey=${process.env.V6vsnGVv6VKzmsjCWIlsXeugIogJD3CL}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    res.json({
      symbol: symbol,
      price: data.price || 'Unavailable',
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stock price' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
