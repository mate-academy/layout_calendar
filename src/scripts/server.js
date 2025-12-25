const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;

// Servir arquivos estáticos da pasta src
app.use(express.static(path.join(__dirname, '../../src')));

// Rota principal que serve o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));

