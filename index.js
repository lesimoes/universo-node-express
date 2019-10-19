const express = require('express');
const app = express();

// Define uma rota com verbo GET
app.get('/', (req, res) => {
  res.status(200).send({data: 'Maarrr já?'})
});
// Define uma rota com o verbo POST
app.post('/', (req, res) => {
  res.status(200).send({data: 'Marr já em POST?'})
})

// Inicia o servidor na porta 3000
app.listen(3000);
console.log('Magic happens on 3000');