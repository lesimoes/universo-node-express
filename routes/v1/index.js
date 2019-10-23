const router = require('express').Router();

router.use('/pub', require('./pub'))

router.use('/pvt', (req, res, next) => {
  if (req.headers.authorization == 'node') {
    return next();
  }
  res.status(401).send({
    data: 'Sem tempo irmão...'
  })
});

router.use('/pvt', require('./pvt'))

module.exports = router