const express = require('express');
const app = express();

// Define uma rota com verbo GET
// Pega 3 parametros na rota
app.get('/:param1/:param2/:param3', (req, res) => {
  const { param1, param2, param3 } = req.params;
  res.status(200).send({
    param1,
    param2,
    param3,
  })
});

// Define uma rota com o verbo POST
app.post('/', (req, res) => {
  res.status(200).send({data: 'Marr já em POST?'})
})

// Inicia o servidor na porta 3000
app.listen(3000);
console.log('Magic happens on 3000');