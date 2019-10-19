const express = require('express');
const app = express();

// Habilita a captura do body
app.use(express.json({ strict: false, limit: '50mb' }));

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
// Pega 1 parametro na rota
// Pega o body em JSON
app.post('/:param1', (req, res) => {
  const { param1 } = req.params;
  console.log(req.body)
  res.status(200).send({
    param1,
    body: req.body,
  })
})

// Inicia o servidor na porta 3000
app.listen(3000);
console.log('Magic happens on 3000');