const express = require('express');
const app = express();

// Define uma rota com verbo GET
app.get('/', async (req, res) => {
  res.status(200).send({data: 'Maarrr já?'})
});

// Inicia o servidor na porta 3000
app.listen(3000);
console.log('Magic happens on 3000');