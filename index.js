const express = require('express');
const app = express();

const router = express.Router();

// Habilita a captura do body
app.use(express.json({ strict: false, limit: '50mb' }));

app.use('/novo', require('./novo'))

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
app.post('/:param1', (req, res, next) => {
  const { param1 } = req.params;
  if (param1 == 1) next();
  res.status(200).send({
    param1,
    body: req.body,
  })
})

app.post('/:param1', (req, res, next) => {
  const { param1 } = req.params;

  res.status(202).send({
    param1,
    body: {
      data: 'Nova rota middleware app'
    },
  })
})

// Pega todas as rotas que não foram mapeadas
app.all('/*', (req, res) => {
  res.status(404).send({
    data: 'Oppps, deu ruim aqui!'
  })
});

// Inicia o servidor na porta 3000
app.listen(3000);
console.log('Magic happens on 3000');