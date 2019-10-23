const router = require('express').Router();

router.get('/:id', (req, res, next) => {
  res.status(200).send({
    data: 'Rota privada'
  })
})

module.exports = router;