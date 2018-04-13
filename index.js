const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there we changes' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('express app is runinng on port 5000');
});
