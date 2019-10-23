const router = require('express').Router();

router.post('/:id', (req, res, next) => {
  console.log(req.params.id)
  res.status(200).send({
    data: 'Chegamos'
  })
});

module.exports = router;
