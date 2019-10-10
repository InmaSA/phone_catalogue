const express = require('express')
const router  = express.Router()

// requerimos el json que vamos a devolver
const phones = require('../phones.json')



/* endpoint a PHONES que responde el json de phones.json */

router.get('/phones', (req, res, next) => {
  res.json(phones)
})

module.exports = router
